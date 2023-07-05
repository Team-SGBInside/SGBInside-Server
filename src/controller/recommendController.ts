import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { sc, rm } from "../constants";
import { fail, success } from "../constants/response";
import { recommendService } from "../service";

// 학과분류
const majorType = {
  COMP: "compsci",
  ENG: "eng",
  KOR: "kor",
};

const sortType = {
  ALL: "all",
  SELF: "self",
  CAREER: "career",
  CLUB: "club",
  VOLUNTEER: "volunteer",
};

const findCreativeActivity = async (req: Request, res: Response) => {
  const major = req.query.major as string;
  const sort = req.query.sort as string;
  if (!major || !sort) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  if (
    major !== majorType.COMP &&
    major !== majorType.ENG &&
    major !== majorType.KOR &&
    sort !== sortType.ALL &&
    sort !== sortType.SELF &&
    sort !== sortType.CAREER &&
    sort !== sortType.CLUB &&
    sort !== sortType.VOLUNTEER
  ) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  try {
    const data = await recommendService.findCreativeActivity(major, sort);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.FIND_CREATIVE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const recommendController = { findCreativeActivity };

export default recommendController;
