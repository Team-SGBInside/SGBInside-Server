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

// 학과별 창의적 체험활동 추천
const findCreativeActivity = async (req: Request, res: Response) => {
  const major = req.body.major;
  const sort = req.query.sort as string;
  if (!major || !sort) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  if (
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

// 대회별 준비팁 추천
const findPrizeActivity = async (req: Request, res: Response) => {
  const contest = req.body.contest;
  if (!contest || contest === "") {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }
  try {
    const data = await recommendService.findPrizeActivity(contest);
    if (!data) {
      return res
        .status(sc.BAD_REQUEST)
        .send(fail(sc.BAD_REQUEST, rm.FIND_PRIZE_ACTIVITY_FAIL));
    }
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.FIND_PRIZE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 커리어넷 api - 관리 교과목 추천

// 학과별 권장도서 추천
const getBooksFromExcel = async (req: Request, res: Response) => {
  const major = req.body.major;
  try {
    const data = await recommendService.getBooksFromExcel(major);
    if (!data) {
      return res
        .status(sc.BAD_REQUEST)
        .send(fail(sc.BAD_REQUEST, rm.GET_RECOMMEND_BOOKS_FAIL));
    }
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.GET_RECOMMEND_BOOKS_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const recommendController = {
  findCreativeActivity,
  findPrizeActivity,
  getBooksFromExcel,
};

export default recommendController;
