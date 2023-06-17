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
  const userId = req.user.userId;
  if (!userId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const data = await activityService.createCreativeActivity(
      creativeActivityCreateDTO,
      userId
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

  const userId = req.user.userId;

  if (!userId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const subjectDetailedActivityCreateDTO: SubjectDetailedActivityCreateDTO =
      req.body;
    const data = await activityService.createSubjectDetailedActivity(
      subjectDetailedActivityCreateDTO,
      userId
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

const createPrizeActivity = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  const userId = req.user.userId;

  if (!userId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const prizeActivityCreateDTO: PrizeActivityCreateDTO = req.body;
    const data = await activityService.createPrizeActivity(
      prizeActivityCreateDTO,
      userId
    );

    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_PRIZE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const createImage = async (req: Request, res: Response) => {
  const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
  const { location } = image;

  if (!location) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_IMAGE));
  }

  try {
    const data = await activityService.createImage(location);
    if (!data) {
      return res
        .status(sc.BAD_REQUEST)
        .send(fail(sc.BAD_REQUEST, rm.CREATE_IMAGE_FAIL));
    }
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_IMAGE_SUCCESS, data));
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

  const userId = req.user.userId;

  if (!userId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const bookActivityCreateDTO: BookActivityCreateDTO = req.body;
    const data = await activityService.createBookActivity(
      bookActivityCreateDTO,
      userId
    );
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.CREATE_BOOK_ACTIVITY_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const activityController = {
  createCreativeActivity,
  createSubjectDetailedActivity,
  createPrizeActivity,
  createImage,
  createBookActivity,
};

export default activityController;
