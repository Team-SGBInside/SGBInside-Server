import { SubjectDetailedActivityCreateDTO } from "./../interfaces/activity/SubjectDetailedActivityCreateDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 창의적 체험활동 기록
const createCreativeActivity = async (
  userId: number,
  name: string,
  activityType: string,
  date: string,
  semester: string,
  role: string,
  thoughts: string
) => {
  await prisma.creative_Activity.create({
    data: {
      name,
      activityType,
      date,
      semester,
      role,
      thoughts,
      writerId: userId,
    },
  });
};

// 과목별 세부능력 특기사항 활동 기록
const createSubjectDetailedActivity = async (
  subjectDetailedActivityCreateDTO: SubjectDetailedActivityCreateDTO
) => {
  const data = await prisma.subject_Detailed_Ability_Activity.create({
    data: {
      writerId: subjectDetailedActivityCreateDTO.userId,
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
  const activityId = data.activityId;
  return { activityId };
};
const activityService = {
  createCreativeActivity,
  createSubjectDetailedActivity,
};

export default activityService;
