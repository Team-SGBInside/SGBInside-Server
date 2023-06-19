import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { sc, rm } from "../constants";
import { fail, success } from "../constants/response";
import { mypageService } from "../service";

const sortType = {
  ALL: "all",
  CREATIVE: "creative",
  SUBJECT: "subject",
  PRIZE: "prize",
  BOOK: "book",
};

const semesterType = {
  ALL: "all",
  FIRST: "1-1",
  SECOND: "1-2",
  THIRD: "2-1",
  FOURTH: "2-2",
  FIFTH: "3-1",
  SIXTH: "3-2",
};

const getMypage = async (req: Request, res: Response) => {
  const sort = req.query.sort as string;
  const semester = req.query.semester as string;
  const writerId = req.body.writerId;

  if (!writerId || !sort || !semester) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  if (
    sort !== sortType.ALL &&
    sort !== sortType.CREATIVE &&
    sort !== sortType.SUBJECT &&
    sort !== sortType.PRIZE &&
    sort !== sortType.BOOK &&
    semester !== semesterType.ALL &&
    semester !== semesterType.FIRST &&
    semester !== semesterType.SECOND &&
    semester !== semesterType.THIRD &&
    semester !== semesterType.FOURTH &&
    semester !== semesterType.FIFTH &&
    semester !== semesterType.SIXTH
  ) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  try {
    const accountInfo = await mypageService.getAccountInfoByUserId(writerId);
    const totalActivity = await mypageService.getTotalActivityByUserId(
      writerId,
      sort,
      semester
    );

    const data = {
      userId: accountInfo?.userId,
      loginId: accountInfo?.loginId,
      name: accountInfo?.name,
      school: accountInfo?.school,
      grade: accountInfo?.grade,
      age: accountInfo?.age,
      isTeen: accountInfo?.isTeen,
      totalActivity: totalActivity,
    };
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.GET_ACCOUNT_INFO_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const mypageController = {
  getMypage,
};

export default mypageController;
