import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 학과별 창의적체험활동 전체 조회
const findCreativeActivity = async (major: string, sort: string) => {
  // 검색창에 입력한 학과에 재학중인 전체 멘토들의 아이디 조회
  const allMentor = await prisma.user.findMany({
    where: {
      isTeen: false,
      major: major,
    },
  });
  const allMentorId: Array<number> = [];

  for (let i = 0; i < allMentor.length; i++) {
    allMentorId.push(allMentor[i].userId);
  }

  // 학과 멘토들의 창의적 체험 활동 전체 조회
  const allMentorActivity: Array<object> = [];

  if (sort === "all") {
    for (let i = 0; i < allMentorId.length; i++) {
      allMentorActivity.push(
        await prisma.creative_Activity.findMany({
          where: {
            writerId: allMentorId[i],
          },
        })
      );
    }
  }

  // 학과 멘토들의 창의적 체험활동 유형별 조회
  if (sort !== "all") {
    switch (sort) {
      case "self":
        for (let i = 0; i < allMentorId.length; i++) {
          allMentorActivity.push(
            await prisma.creative_Activity.findMany({
              where: {
                writerId: allMentorId[i],
                activityType: "자율활동",
              },
            })
          );
          return allMentorActivity[0];
        }

      case "career":
        for (let i = 0; i < allMentorId.length; i++) {
          allMentorActivity.push(
            await prisma.creative_Activity.findMany({
              where: {
                writerId: allMentorId[i],
                activityType: "진로활동",
              },
            })
          );
          return allMentorActivity[0];
        }
      case "club":
        for (let i = 0; i < allMentorId.length; i++) {
          allMentorActivity.push(
            await prisma.creative_Activity.findMany({
              where: {
                writerId: allMentorId[i],
                activityType: "동아리활동",
              },
            })
          );
          return allMentorActivity[0];
        }

      case "volunteer":
        for (let i = 0; i < allMentorId.length; i++) {
          allMentorActivity.push(
            await prisma.creative_Activity.findMany({
              where: {
                writerId: allMentorId[i],
                activityType: "봉사활동",
              },
            })
          );
          return allMentorActivity[0];
        }
    }
  }

  return allMentorActivity[0];
};

const findPrizeActivity = async (contest: string) => {
  const allSearchContest = [];
  const allPrizeActivity = await prisma.prize_Activity.findMany();
  const searchContest = JSON.stringify(contest.split(""));

  console.log(typeof searchContest, searchContest);
  for (let i = 0; i < allPrizeActivity.length; i++) {
    if (
      allPrizeActivity[i].name
        .split("")
        .filter((x) => searchContest.includes(x))
    ) {
      allSearchContest.push(allPrizeActivity[i]);
    }
  }
  return allSearchContest;
};

const recommendService = { findCreativeActivity, findPrizeActivity };
export default recommendService;
