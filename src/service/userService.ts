import { UserSignInDTO } from "../interfaces/user/UserSignInDTO";
import { PrismaClient } from "@prisma/client";
import { UserCreateDTO } from "../interfaces/user/UserCreateDTO";
import bcrypt from "bcryptjs";
import { sc } from "../constants";

const prisma = new PrismaClient();

// 유저 생성
const createUser = async (userCreateDTO: UserCreateDTO) => {
  // 넘겨받은 password를 bcrypt의 도움을 받아 암호화
  const salt = await bcrypt.genSalt(10); // 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDTO.password, salt); // 위에서 랜덤을 생성한 salt를 이용해 암호화
  const isTeen = Boolean(userCreateDTO?.isTeen);
  const data = await prisma.user.create({
    data: {
      loginId: userCreateDTO.loginId,
      password,
      name: userCreateDTO.name,
      school: userCreateDTO.school,
      grade: userCreateDTO.grade,
      age: userCreateDTO.age,
      isTeen,
    },
  });

  return data;
};

// 로그인
const signIn = async (userSignInDTO: UserSignInDTO) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        loginId: userSignInDTO.loginId,
      },
    });
    if (!user) return null;

    // bcrypt가 DB에 저장된 기존 password와 넘겨 받은 password를 대조하고
    // match false시 401을 리턴
    const isMatch = await bcrypt.compare(userSignInDTO.password, user.password);
    if (!isMatch) return sc.UNAUTHORIZED;

    return user.userId;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const userService = {
  createUser,
  signIn,
};

export default userService;
