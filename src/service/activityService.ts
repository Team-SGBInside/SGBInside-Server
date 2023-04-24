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

const activityService = {
  createCreativeActivity,
};

export default activityService;
