import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { sc, rm } from "../constants";
import { fail, success } from "../constants/response";
import { mypageService } from "../service";

const getMypage = async (req: Request, res: Response) => {
  const userId = req.body.userId;
  if (!userId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }
  try {
    const accountInfo = await mypageService.getAccountInfoByUserId(userId);
    //const allActivity = await mypageService.getActivityByUserId(+userId);
    const totalActivity = await mypageService.getTotalActivityByUserId(userId);

    const activityCount =
      totalActivity.allcreativeActivity.length +
      totalActivity.allSubjectDetailedActivity.length +
      totalActivity.allPrizeActivity.length +
      totalActivity.allBookActivity.length;

    const data = {
      userId: accountInfo?.userId,
      name: accountInfo?.name,
      school: accountInfo?.school,
      grade: accountInfo?.grade,
      age: accountInfo?.age,
      activityCount: activityCount,
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
