import { SubjectDetailedActivityCreateDTO } from "./../interfaces/activity/SubjectDetailedActivityCreateDTO";
import { Request, Response } from "express";
import { activityService } from "../service";
import { validationResult } from "express-validator";
import { sc, rm } from "../constants";
import { fail, success } from "../constants/response";

const createCreativeActivity = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const { name, activityType, date, semester, role, thoughts } = req.body;
  const userId = req.user.userId;

  const data = await activityService.createCreativeActivity(
    +userId,
    name,
    activityType,
    date,
    semester,
    role,
    thoughts
  );

  if (!userId) {
    return res
      .status(400)
      .json({ status: 400, message: "창의적 체험활동 기록 실패" });
  }
  return res
    .status(200)
    .json({ status: 200, message: "창의적 체험활동 기록 성공", data });
};

const createSubjectDetailedActivity = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const subjectDetailedActivityCreateDTO: SubjectDetailedActivityCreateDTO =
      req.body;
    const data = await activityService.createSubjectDetailedActivity(
      subjectDetailedActivityCreateDTO
    );

    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_SUBJECT_DETAILED_ACTIVITY_SUCCESS));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const activityController = {
  createCreativeActivity,
  createSubjectDetailedActivity,
};

export default activityController;
