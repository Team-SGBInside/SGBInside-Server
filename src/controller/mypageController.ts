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

const getMypage = async (req: Request, res: Response) => {
  const sort = req.query.sort as string;
  const userId = req.user.userId;

  if (!userId || !sort) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  if (
    sort !== sortType.ALL &&
    sort !== sortType.CREATIVE &&
    sort !== sortType.SUBJECT &&
    sort !== sortType.PRIZE &&
    sort !== sortType.BOOK
  ) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  try {
    const accountInfo = await mypageService.getAccountInfoByUserId(userId);
    //const allActivity = await mypageService.getActivityByUserId(+userId);
    const totalActivity = await mypageService.getTotalActivityByUserId(
      userId,
      sort
    );

    // const activityCount =
    //   totalActivity.allcreativeActivity.length +
    //   totalActivity.allSubjectDetailedActivity.length +
    //   totalActivity.allPrizeActivity.length +
    //   totalActivity.allBookActivity.length;

    const data = {
      userId: accountInfo?.userId,
      loginId: accountInfo?.loginId,
      name: accountInfo?.name,
      school: accountInfo?.school,
      grade: accountInfo?.grade,
      age: accountInfo?.age,
      // activityCount: activityCount,
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
