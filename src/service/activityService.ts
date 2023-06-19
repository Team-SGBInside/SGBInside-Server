import { PrizeActivityCreateDTO } from "./../interfaces/activity/PrizeActivityCreateDTO";
import { CreativeActivityCreateDTO } from "./../interfaces/activity/CreativeActivityCreateDTO";
import { SubjectDetailedActivityCreateDTO } from "./../interfaces/activity/SubjectDetailedActivityCreateDTO";
import { PrismaClient } from "@prisma/client";
import { BookActivityCreateDTO } from "../interfaces/activity/BookActivityCreateDTO";
const prisma = new PrismaClient();

// 창의적 체험활동 기록
const createCreativeActivity = async (
  creativeActivityCreateDTO: CreativeActivityCreateDTO
) => {
  const data = await prisma.creative_Activity.create({
    data: {
      name: creativeActivityCreateDTO.name,
      activityType: creativeActivityCreateDTO.activityType,
      startDate: creativeActivityCreateDTO.startDate,
      endDate: creativeActivityCreateDTO.endDate,
      semester: creativeActivityCreateDTO.semester,
      role: creativeActivityCreateDTO.role,
      thoughts: creativeActivityCreateDTO.thoughts,
      writerId: creativeActivityCreateDTO.writerId,
    },
  });
  // const activityId = data.activityId;
  return data;
};

// 과목별 세부능력 특기사항 활동 기록
const createSubjectDetailedActivity = async (
  subjectDetailedActivityCreateDTO: SubjectDetailedActivityCreateDTO
) => {
  const data = await prisma.subject_Detailed_Ability_Activity.create({
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
      writerId: subjectDetailedActivityCreateDTO.writerId,
    },
  });
  // const activityId = data.activityId;
  return data;
};

// 수상경력 기록
const createPrizeActivity = async (
  prizeActivityCreateDTO: PrizeActivityCreateDTO
  //location: string,
  // writerId: number
) => {
  const data = await prisma.prize_Activity.create({
    data: {
      name: prizeActivityCreateDTO.name,
      prize: prizeActivityCreateDTO.prize,
      date: prizeActivityCreateDTO.date,
      semester: prizeActivityCreateDTO.semester,
      // prizeImage: location,
      prizeImage: prizeActivityCreateDTO.prizeImage,
      role: prizeActivityCreateDTO.role,
      thoughts: prizeActivityCreateDTO.thoughts,
      writerId: prizeActivityCreateDTO.writerId,
      type: prizeActivityCreateDTO.type,
    },
  });
  // const activityId = data.activityId;
  return data;
};

// 독서활동 기록
const createBookActivity = async (
  bookActivityCreateDTO: BookActivityCreateDTO
) => {
  const data = await prisma.book_Activity.create({
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
      writerId: bookActivityCreateDTO.writerId,
    },
  });
  // const activityId = data.activityId;
  return data;
};
const activityService = {
  createCreativeActivity,
  createSubjectDetailedActivity,
  createPrizeActivity,
  createBookActivity,
};

export default activityService;
