import { Request, Response } from "express";
import { ActivityService } from "../service";

const createCreativeActivity = async (req: Request, res: Response) => {
  const { name, activityType, date, semester, role, thoughts } = req.body;

  const data = await activityService.createCreativeActivity(
    name,
    activityType,
    date,
    semester,
    role,
    thoughts
  );

  if (!data) {
    return res
      .status(400)
      .json({ status: 400, message: "창의적 체험활동 기록 실패" });
  }
  return res
    .status(200)
    .json({ status: 200, message: "창의적 체험활동 기록 성공", data });
};

const activityController = {
  createCreativeActivity,
};

export default activityController;
