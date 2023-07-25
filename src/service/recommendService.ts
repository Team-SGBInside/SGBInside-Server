import { PrismaClient, User } from "@prisma/client";
import ExcelJS from "exceljs";
import fs from "fs";

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
    // 작성한 창체활동이 있는 경우에만 조회하고자 하는 id에 추가
    const mentorActivity = await prisma.creative_Activity.findMany({
      where: {
        writerId: allMentor[i].userId,
      },
    });
    if (mentorActivity.length >= 1) {
      allMentorId.push(allMentor[i].userId);
    }
  }
  console.log("allMentorId: ", allMentorId);

  // 학과 멘토들의 창의적 체험 활동 전체 조회
  const allMentorActivity: Array<object> | any = [];

  if (sort === "all") {
    for (let i = 0; i < allMentorId.length; i++) {
      allMentorActivity.push(
        await prisma.creative_Activity.findMany({
          where: {
            writerId: allMentorId[i],
          },
        })
      );
      console.log(allMentorActivity);

      const writer = await prisma.user.findUnique({
        where: {
          userId: allMentorId[i],
        },
      });

      const writerName = writer?.name;
      const writerMajor: string | null | undefined | any = writer?.major;
      const writerSchoolMajor = writer?.school.concat(" ".concat(writerMajor));
      console.log(allMentorActivity[0].length);
      for (let i = 0; i < allMentorActivity[0].length; i++) {
        allMentorActivity[0][i].writerName = writer?.name;
        allMentorActivity[0][i].writerSchoolMajor = writerSchoolMajor;
      }
    }
    console.log("final allMentorActivity: ", allMentorActivity);
    return allMentorActivity;
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
          return allMentorActivity;
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
          return allMentorActivity;
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
          return allMentorActivity;
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
          return allMentorActivity;
        }
    }
  }
};

// 대회별 준비팁 추천
const findPrizeActivity = async (contest: string) => {
  const allSearchContest = [];
  const allPrizeActivity = await prisma.prize_Activity.findMany();
  const searchContest = JSON.stringify(contest.split(""));

  console.log(typeof searchContest, searchContest);
  for (let i = 0; i < allPrizeActivity.length; i++) {
    if (
      allPrizeActivity[i].name.includes(contest)
      // allPrizeActivity[i].name
      //   .split("")
      //   .filter((x) => searchContest.includes(x))
    ) {
      console.log("here ", i);
      allSearchContest.push(allPrizeActivity[i]);
    }
  }
  console.log(allSearchContest);
  allSearchContest[0] = {
    searchKeyword: contest,
    totalTipCount: allSearchContest.length,
  };
  return allSearchContest;
};

// 학과별 권장도서 조회
const getBooksFromExcel = async (major: string) => {
  // console.log("Current Directory Path:", __dirname);
  // let path: any;
  // path.join(__dirname, "../books/recommendBooks.xlsx");
  //console.log(workbook);
  const jsonFile = fs.readFileSync("src/books/recommendBooks.json", "utf8");

  const jsonData = JSON.parse(jsonFile);

  const recommendBooks: Array<object> = [];
  for (let i = 0; i < jsonData.length; i++) {
    const jsonDataMajor = jsonData[i]["관련전공"].split(",");
    if (major.includes(jsonDataMajor) || jsonDataMajor.includes(major)) {
      const searchQuery = jsonData[i]["도서명"];
      console.log(searchQuery);
      jsonData[
        i
      ].purchaseLink = `https://search.kyobobook.co.kr/search?keyword=${searchQuery}`;
      recommendBooks.push(jsonData[i]);
    }
  }
  recommendBooks[0] = {
    searchKeyword: major,
    totalBooksCount: recommendBooks.length,
  };
  return recommendBooks;
};
const recommendService = {
  findCreativeActivity,
  findPrizeActivity,
  getBooksFromExcel,
};
export default recommendService;
