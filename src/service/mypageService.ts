import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAccountInfoByUserId = async (userId: number) => {
  const accountInfo = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
  });

  return accountInfo;
};

const mypageService = {
  getAccountInfoByUserId,
};

export default mypageService;
