import { SubjectDetailedActivityCreateDTO } from "./../interfaces/activity/SubjectDetailedActivityCreateDTO";
import { CreativeActivityCreateDTO } from "./../interfaces/activity/CreativeActivityCreateDTO";
import { PrismaClient } from "@prisma/client";
import { BookActivityCreateDTO } from "../interfaces/activity/BookActivityCreateDTO";
import { PrizeActivityCreateDTO } from "../interfaces/activity/PrizeActivityCreateDTO";

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

// 개별 활동 수정 - 창체
const updateCreativeActivity = async (
  activityId: number,
  creativeActivityCreateDTO: CreativeActivityCreateDTO
) => {
  const data = await prisma.creative_Activity.update({
    where: {
      activityId: activityId,
    },
    data: {
      name: creativeActivityCreateDTO.name,
      activityType: creativeActivityCreateDTO.activityType,
      startDate: creativeActivityCreateDTO.startDate,
      endDate: creativeActivityCreateDTO.endDate,
      semester: creativeActivityCreateDTO.semester,
      role: creativeActivityCreateDTO.role,
      thoughts: creativeActivityCreateDTO.thoughts,
    },
  });
  return data;
};

// 개별 활동 수정 - 세특
const updateSubjectActivity = async (
  activityId: number,
  subjectDetailedActivityCreateDTO: SubjectDetailedActivityCreateDTO
) => {
  const data = await prisma.subject_Detailed_Ability_Activity.update({
    where: {
      activityId: activityId,
    },
    data: {
      subjectName: subjectDetailedActivityCreateDTO.subjectName,
      subjectContent: subjectDetailedActivityCreateDTO.subjectContent,
      activitySemester: subjectDetailedActivityCreateDTO.activitySemester,
      startDate: subjectDetailedActivityCreateDTO.startDate,
      endDate: subjectDetailedActivityCreateDTO.endDate,
      mainActivity: subjectDetailedActivityCreateDTO.mainActivity,
      activityContentDetail:
        subjectDetailedActivityCreateDTO.activityContentDetail,
      subjectFurtherStudy: subjectDetailedActivityCreateDTO.subjectFurtherStudy,
    },
  });
  return data;
};

// 개별 활동 수정 - 독서
const updateBookActivity = async (
  activityId: number,
  bookActivityCreateDTO: BookActivityCreateDTO
) => {
  const data = await prisma.book_Activity.update({
    where: {
      activityId: activityId,
    },
    data: {
      titleAuthor: bookActivityCreateDTO.titleAuthor,
      endDate: bookActivityCreateDTO.endDate,
      semester: bookActivityCreateDTO.semester,
      thoughts: bookActivityCreateDTO.thoughts,
      relatedSubject: bookActivityCreateDTO.relatedSubject,
      quote1: bookActivityCreateDTO.quote1,
      quote2: bookActivityCreateDTO.quote2,
      quote3: bookActivityCreateDTO.quote3,
      quote4: bookActivityCreateDTO.quote4,
      quote5: bookActivityCreateDTO.quote5,
    },
  });
  return data;
};

// 개별 활동 수정 - 수상
const updatePrizeActivity = async (
  activityId: number,
  prizeActivityCreateDTO: PrizeActivityCreateDTO,
  location: string
) => {
  const data = await prisma.prize_Activity.update({
    where: {
      activityId: activityId,
    },
    data: {
      name: prizeActivityCreateDTO.name,
      prize: prizeActivityCreateDTO.prize,
      date: prizeActivityCreateDTO.date,
      semester: prizeActivityCreateDTO.semester,
      prizeImage: location,
      role: prizeActivityCreateDTO.role,
      thoughts: prizeActivityCreateDTO.thoughts,
      type: prizeActivityCreateDTO.type,
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
  updateCreativeActivity,
  updateSubjectActivity,
  updateBookActivity,
  updatePrizeActivity,
  deleteCreativeActivity,
  deleteSubjectActivity,
  deleteBookActivity,
  deletePrizeActivity,
};

export default mypageService;
