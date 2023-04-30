import { CreativeActivityCreateDTO } from "./../interfaces/activity/CreativeActivityCreateDTO";
import { SubjectDetailedActivityCreateDTO } from "./../interfaces/activity/SubjectDetailedActivityCreateDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 창의적 체험활동 기록
const createCreativeActivity = async (
  creativeActivityCreateDTO: CreativeActivityCreateDTO
) => {
  const data = await prisma.creative_Activity.create({
    data: {
      writerId: creativeActivityCreateDTO.userId,
      name: creativeActivityCreateDTO.name,
      activityType: creativeActivityCreateDTO.activityType,
      startDate: creativeActivityCreateDTO.startDate,
      endDate: creativeActivityCreateDTO.endDate,
      semester: creativeActivityCreateDTO.semester,
      role: creativeActivityCreateDTO.role,
      thoughts: creativeActivityCreateDTO.thoughts,
    },
  });
  const activityId = data.activityId;
  return { activityId };
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
