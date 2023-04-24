import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 유저 생성
const createUser = async (
  loginId: string,
  password: string,
  name: string,
  school: string,
  grade: number,
  isTeen: boolean
) => {
  const data = await prisma.user.create({
    data: {
      loginId,
      password,
      name,
      school,
      grade,
      isTeen,
    },
  });

  return data;
};
const userService = {
  createUser,
};

export default userService;
