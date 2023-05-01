import { CreativeActivityCreateDTO } from "./../interfaces/activity/CreativeActivityCreateDTO";
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

  const creativeActivityCreateDTO: CreativeActivityCreateDTO = req.body;
  const userId = req.body.userId;
  if (!userId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const data = await activityService.createCreativeActivity(
      creativeActivityCreateDTO
    );

    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_CREATIVE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const createSubjectDetailedActivity = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const userId = req.body.userId;

  if (!userId) {
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
      .send(success(sc.OK, rm.CREATE_SUBJECT_DETAILED_ACTIVITY_SUCCESS, data));
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
