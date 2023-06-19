import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 계정정보 조회
const getAccountInfoByUserId = async (writerId: number) => {
  const accountInfo = await prisma.user.findUnique({
    where: {
      userId: writerId,
    },
  });

  return accountInfo;
};

// 전체 활동 조회 api - GET ~/mypage?sort=value&semester=value
const getTotalActivityByUserId = async (
  writerId: number,
  sort: string,
  semester: string
) => {
  // 유형별 전체 활동 조회
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
          return allcreativeActivity;
        }

        if (semester == "all") {
          const allcreativeActivity = await prisma.creative_Activity.findMany({
            where: {
              writerId: writerId,
            },
          });
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
          return allSubjectDetailedActivity;
        }

        if (semester == "all") {
          const allSubjectDetailedActivity =
            await prisma.subject_Detailed_Ability_Activity.findMany({
              where: {
                writerId: writerId,
              },
            });

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

          return allPrizeActivity;
        }

        if (semester == "all") {
          const allPrizeActivity = await prisma.prize_Activity.findMany({
            where: {
              writerId: writerId,
            },
          });

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

          return allBookActivity;
        }

        if (semester == "all") {
          const allBookActivity = await prisma.book_Activity.findMany({
            where: {
              writerId: writerId,
            },
          });

          return allBookActivity;
        }
    }
  }

  // 유형 구분 없이 전체 활동 조회
  // if (sort === "all") {
  //   switch (semester) {
  //     case "1-1":
  //       const allcreativeActivity = await prisma.creative_Activity.findMany({
  //         where: {
  //           writerId: writerId,
  //           semester: "1-1",
  //         },
  //       });
  //       const allSubjectActivity =
  //         await prisma.subject_Detailed_Ability_Activity.findMany({
  //           where: {
  //             writerId: writerId,
  //             activitySemester: "1-1",
  //           },
  //         });
  //       const allBookActivity = await prisma.book_Activity.findMany({
  //         where: {
  //           writerId: writerId,
  //           semester: "1-1",
  //         },
  //       });
  //       const allPrizeActivity = await prisma.prize_Activity.findMany({
  //         where: {
  //           writerId: writerId,
  //           semester: "1-1",
  //         },
  //       });
  //       return {
  //         allcreativeActivity,
  //         allSubjectActivity,
  //         allBookActivity,
  //         allPrizeActivity,
  //       };
  //     case "1-2":
  //       const allcreativeActivity = await prisma.creative_Activity.findMany({
  //         where: {
  //           writerId: writerId,
  //           semester: "1-2",
  //         },
  //       });
  //       const allSubjectActivity =
  //         await prisma.subject_Detailed_Ability_Activity.findMany({
  //           where: {
  //             writerId: writerId,
  //             activitySemester: "1-2",
  //           },
  //         });
  //       const allBookActivity = await prisma.book_Activity.findMany({
  //         where: {
  //           writerId: writerId,
  //           semester: "1-2",
  //         },
  //       });
  //       const allPrizeActivity = await prisma.prize_Activity.findMany({
  //         where: {
  //           writerId: writerId,
  //           semester: "1-2",
  //         },
  //       });
  //       return {
  //         allcreativeActivity,
  //         allSubjectActivity,
  //         allBookActivity,
  //         allPrizeActivity,
  //       };
  //     case "2-1":
  //     case "2-2":
  //     case "3-1":
  //     case "3-2":
  //   }
  // }

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

// 개별 활동 조회 - 창체
const getCreativeActivity = async (activityId: number) => {
  const data = await prisma.creative_Activity.findUnique({
    where: {
      activityId: activityId,
    },
  });
  return data;
};

// 개별 활동 조회 - 세특
const getSubjectActivity = async (activityId: number) => {
  const data = await prisma.subject_Detailed_Ability_Activity.findUnique({
    where: {
      activityId: activityId,
    },
  });
  return data;
};

// 개별 활동 조회 - 독서
const getBookActivity = async (activityId: number) => {
  const data = await prisma.book_Activity.findUnique({
    where: {
      activityId: activityId,
    },
  });
  return data;
};

// 개별 활동 조회 - 수상
const getPrizeActivity = async (activityId: number) => {
  const data = await prisma.prize_Activity.findUnique({
    where: {
      activityId: activityId,
    },
  });
  return data;
};

// 개별 활동 삭제 - 창체
const deleteCreativeActivity = async (activityId: number) => {
  const data = await prisma.creative_Activity.delete({
    where: {
      activityId: activityId,
    },
  });
  return data;
};

// 개별 활동 삭제 - 세특
const deleteSubjectActivity = async (activityId: number) => {
  const data = await prisma.subject_Detailed_Ability_Activity.delete({
    where: {
      activityId: activityId,
    },
  });
  return data;
};

// 개별 활동 삭제 - 독서
const deleteBookActivity = async (activityId: number) => {
  const data = await prisma.book_Activity.delete({
    where: {
      activityId: activityId,
    },
  });
  return data;
};
// 개별 활동 삭제 - 삭제
const deletePrizeActivity = async (activityId: number) => {
  const data = await prisma.prize_Activity.delete({
    where: {
      activityId: activityId,
    },
  });
  return data;
};

const mypageService = {
  getAccountInfoByUserId,
  getTotalActivityByUserId,
  getCreativeActivity,
  getSubjectActivity,
  getBookActivity,
  getPrizeActivity,
  deleteCreativeActivity,
  deleteSubjectActivity,
  deleteBookActivity,
  deletePrizeActivity,
};

export default mypageService;
