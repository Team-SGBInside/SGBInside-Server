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

const getTotalActivityByUserId = async (userId: number, sort: string) => {
  if (sort !== "all") {
    switch (sort) {
      case "creative":
        const allcreativeActivity = await prisma.creative_Activity.findMany({
          where: {
            writerId: userId,
          },
        });
        return allcreativeActivity;

      case "subject":
        const allSubjectDetailedActivity =
          await prisma.subject_Detailed_Ability_Activity.findMany({
            where: {
              writerId: userId,
            },
          });
        return allSubjectDetailedActivity;

      case "prize":
        const allPrizeActivity = await prisma.prize_Activity.findMany({
          where: {
            writerId: userId,
          },
        });
        return allPrizeActivity;

      case "book":
        const allBookActivity = await prisma.book_Activity.findMany({
          where: {
            writerId: userId,
          },
        });
        return allBookActivity;
    }
  }

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

  const activityCount =
    allcreativeActivity.length +
    allSubjectDetailedActivity.length +
    allPrizeActivity.length +
    allBookActivity.length;

  const data = {
    activityCount,
    allcreativeActivity,
    allSubjectDetailedActivity,
    allPrizeActivity,
    allBookActivity,
  };

  return data;
};

const mypageService = {
  getAccountInfoByUserId,
  getTotalActivityByUserId,
};

export default mypageService;
