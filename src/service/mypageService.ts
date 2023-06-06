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

const getTotalActivityByUserId = async (userId: number) => {
  const allcreativeActivity = await prisma.creative_Activity.findMany({
    where: {
      writerId: userId,
    },
  });
  const allSubjectDetailedActivity =
    await prisma.subject_Detailed_Ability_Activity.findMany({
      where: {
        writerId: userId,
      },
    });
  const allPrizeActivity = await prisma.prize_Activity.findMany({
    where: {
      writerId: userId,
    },
  });
  const allBookActivity = await prisma.book_Activity.findMany({
    where: {
      writerId: userId,
    },
  });

  const data = {
    allcreativeActivity: allcreativeActivity,
    allSubjectDetailedActivity: allSubjectDetailedActivity,
    allPrizeActivity: allPrizeActivity,
    allBookActivity: allBookActivity,
  };

  return data;
};

const mypageService = {
  getAccountInfoByUserId,
  getTotalActivityByUserId,
};

export default mypageService;
