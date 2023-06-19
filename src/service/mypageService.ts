import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAccountInfoByUserId = async (writerId: number) => {
  const accountInfo = await prisma.user.findUnique({
    where: {
      userId: writerId,
    },
  });

  return accountInfo;
};

const getTotalActivityByUserId = async (
  writerId: number,
  sort: string,
  semester: string
) => {
  if (sort !== "all") {
    switch (sort) {
      case "creative":
        if (semester != "all") {
          const allcreativeActivity = await prisma.creative_Activity.findMany({
            where: {
              writerId: writerId,
              semester: semester,
            },
          });
          console.log("here1");
          return allcreativeActivity;
        }

        if (semester == "all") {
          const allcreativeActivity = await prisma.creative_Activity.findMany({
            where: {
              writerId: writerId,
            },
          });
          console.log("here2");
          return allcreativeActivity;
        }

      case "subject":
        if (semester != "all") {
          const allSubjectDetailedActivity =
            await prisma.subject_Detailed_Ability_Activity.findMany({
              where: {
                writerId: writerId,
                activitySemester: semester,
              },
            });
          console.log("here3");
          return allSubjectDetailedActivity;
        }

        if (semester == "all") {
          const allSubjectDetailedActivity =
            await prisma.subject_Detailed_Ability_Activity.findMany({
              where: {
                writerId: writerId,
              },
            });
          console.log("here4");

          return allSubjectDetailedActivity;
        }

      case "prize":
        if (semester != "all") {
          const allPrizeActivity = await prisma.prize_Activity.findMany({
            where: {
              writerId: writerId,
              semester: semester,
            },
          });
          console.log("here5");

          return allPrizeActivity;
        }

        if (semester == "all") {
          const allPrizeActivity = await prisma.prize_Activity.findMany({
            where: {
              writerId: writerId,
            },
          });
          console.log("here6");

          return allPrizeActivity;
        }

      case "book":
        if (semester != "all") {
          const allBookActivity = await prisma.book_Activity.findMany({
            where: {
              writerId: writerId,
              semester: semester,
            },
          });
          console.log("here7");

          return allBookActivity;
        }

        if (semester == "all") {
          const allBookActivity = await prisma.book_Activity.findMany({
            where: {
              writerId: writerId,
            },
          });
          console.log("here8");

          return allBookActivity;
        }
    }
  }

  const allcreativeActivity = await prisma.creative_Activity.findMany({
    where: {
      writerId: writerId,
      semester: semester,
    },
  });

  const allSubjectDetailedActivity =
    await prisma.subject_Detailed_Ability_Activity.findMany({
      where: {
        writerId: writerId,
        activitySemester: semester,
      },
    });

  const allPrizeActivity = await prisma.prize_Activity.findMany({
    where: {
      writerId: writerId,
      semester: semester,
    },
  });

  const allBookActivity = await prisma.book_Activity.findMany({
    where: {
      writerId: writerId,
      semester: semester,
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
