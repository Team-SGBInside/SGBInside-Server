import { BookActivityCreateDTO } from "./../interfaces/activity/BookActivityCreateDTO";
import { PrizeActivityCreateDTO } from "./../interfaces/activity/PrizeActivityCreateDTO";
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
  const writerId = req.user.userId;
  if (!writerId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const data = await activityService.createCreativeActivity(
      writerId,
      creativeActivityCreateDTO
    );

    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_CREATIVE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
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

  const subjectDetailedActivityCreateDTO: SubjectDetailedActivityCreateDTO =
    req.body;
  const writerId = req.user.userId;
  if (!writerId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const data = await activityService.createSubjectDetailedActivity(
      writerId,
      subjectDetailedActivityCreateDTO
    );

    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_SUBJECT_DETAILED_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const createPrizeActivity = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }
  const prizeActivityCreateDTO: PrizeActivityCreateDTO = req.body;
  // const writerId: number = parseInt(req.body.writerId);
  // console.log(writerId, typeof writerId);
  const writerId = req.user.userId;
  if (!writerId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
  const { location } = image;

  // if (!userId) {
  //   return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  // }

  try {
    const data = await activityService.createPrizeActivity(
      prizeActivityCreateDTO,
      location,
      writerId
    );

    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_PRIZE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const createBookActivity = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }
  const bookActivityCreateDTO: BookActivityCreateDTO = req.body;
  const writerId = req.user.userId;
  if (!writerId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  // const userId = req.user.userId;

  // if (!userId) {
  //   return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  // }

  try {
    const data = await activityService.createBookActivity(
      writerId,
      bookActivityCreateDTO
    );
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_BOOK_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const activityController = {
  createCreativeActivity,
  createSubjectDetailedActivity,
  createPrizeActivity,
  createBookActivity,
};

export default activityController;
