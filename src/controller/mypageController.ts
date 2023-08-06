import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { sc, rm } from "../constants";
import { fail, success } from "../constants/response";
import { mypageService } from "../service";
import { CreativeActivityCreateDTO } from "../interfaces/activity/CreativeActivityCreateDTO";
import { SubjectDetailedActivityCreateDTO } from "../interfaces/activity/SubjectDetailedActivityCreateDTO";
import { BookActivityCreateDTO } from "../interfaces/activity/BookActivityCreateDTO";
import { PrizeActivityCreateDTO } from "../interfaces/activity/PrizeActivityCreateDTO";

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

// 마이페이지 전체 조회
const getMypage = async (req: Request, res: Response) => {
  // const writerId = req.body.writerId;
  const writerId = req.user.id;
  const sort = req.query.sort as string;
  const semester = req.query.semester as string;

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
    const accountInfo = await mypageService.getAccountInfoByUserId(+writerId);
    const totalActivity = await mypageService.getTotalActivityByUserId(
      +writerId,
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
    return res.status(sc.OK).send(success(sc.OK, rm.GET_MYPAGE_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 조회 - 창체
const getCreativeActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const foundActivity = await mypageService.getCreativeActivity(+activityId);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.GET_SINGLE_ACTIVITY_SUCCESS, foundActivity));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 조회 - 세특
const getSubjectActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const foundActivity = await mypageService.getSubjectActivity(+activityId);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.GET_SINGLE_ACTIVITY_SUCCESS, foundActivity));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 조회 - 독서
const getBookActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const foundActivity = await mypageService.getBookActivity(+activityId);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.GET_SINGLE_ACTIVITY_SUCCESS, foundActivity));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 조회 - 수상
const getPrizeActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const foundActivity = await mypageService.getPrizeActivity(+activityId);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.GET_SINGLE_ACTIVITY_SUCCESS, foundActivity));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 수정 - 창체
const updateCreativeActivity = async (req: Request, res: Response) => {
  const creativeActivityCreateDTO: CreativeActivityCreateDTO = req.body;

  const { activityId } = req.params;
  // const writerId = req.body.writerId;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  // if (writerId != null) {
  //   return res
  //     .status(sc.BAD_REQUEST)
  //     .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  // }

  try {
    const data = await mypageService.updateCreativeActivity(
      +activityId,
      creativeActivityCreateDTO
    );
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.UPDATE_SINGLE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 수정 - 세특
const updateSubjectActivity = async (req: Request, res: Response) => {
  const subjectActivityCreateDTO: SubjectDetailedActivityCreateDTO = req.body;
  const writerId = req.body.writerId;
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  if (writerId != null) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  try {
    const data = await mypageService.updateSubjectActivity(
      +activityId,
      subjectActivityCreateDTO
    );
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.UPDATE_SINGLE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 수정 - 독서
const updateBookActivity = async (req: Request, res: Response) => {
  const bookActivityCreateDTO: BookActivityCreateDTO = req.body;
  const writerId = req.body.writerId;
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  if (writerId != null) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  try {
    const data = await mypageService.updateBookActivity(
      +activityId,
      bookActivityCreateDTO
    );
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.UPDATE_SINGLE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 수정 - 수상
const updatePrizeActivity = async (req: Request, res: Response) => {
  const prizeActivityCreateDTO: PrizeActivityCreateDTO = req.body;

  const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
  const { location } = image;
  const { activityId } = req.params;

  console.log(prizeActivityCreateDTO);
  console.log(location);
  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  // if (writerId !== null) {
  //   return res
  //     .status(sc.BAD_REQUEST)
  //     .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  // }

  try {
    const data = await mypageService.updatePrizeActivity(
      +activityId,
      prizeActivityCreateDTO,
      location
    );
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.UPDATE_SINGLE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 삭제 - 창체
const deleteCreativeActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const data = await mypageService.deleteCreativeActivity(+activityId);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.DELETE_SINGLE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 삭제 - 세특
const deleteSubjectActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const data = await mypageService.deleteSubjectActivity(+activityId);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.DELETE_SINGLE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 삭제 - 독서
const deleteBookActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const data = await mypageService.deleteBookActivity(+activityId);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.DELETE_SINGLE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

// 마이페이지 개별 활동 삭제 - 수상
const deletePrizeActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  if (!activityId) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));
  }

  try {
    const data = await mypageService.deletePrizeActivity(+activityId);
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.DELETE_SINGLE_ACTIVITY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const mypageController = {
  getMypage,
  // getAccountInfo,
  getCreativeActivity,
  getSubjectActivity,
  getBookActivity,
  getPrizeActivity,
  updateCreativeActivity,
  updateSubjectActivity,
  updateBookActivity,
  updatePrizeActivity,
  deleteCreativeActivity,
  deleteSubjectActivity,
  deleteBookActivity,
  deletePrizeActivity,
};

export default mypageController;
