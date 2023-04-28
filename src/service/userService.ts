import { PrismaClient } from "@prisma/client";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
const prisma = new PrismaClient();

// 유저 생성
const createUser = async (userCreateDTO: UserCreateDTO) => {
  // 넘겨받은 password를 bcrypt의 도움을 받아 암호화
  const salt = await bcrypt.genSalt(10); // 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDTO.password, salt); // 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.user.create({
    data: {
      loginId: userCreateDTO?.loginId,
      name: userCreateDTO?.name,
      school: userCreateDTO?.school,
      grade: userCreateDTO?.grade,
      isTeen: userCreateDTO?.isTeen,
      password,
    },
  });

  return data;
};
const userService = {
  createUser,
};

export default userService;
