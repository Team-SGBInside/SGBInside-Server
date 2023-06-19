import { Router } from "express";
import { mypageController } from "../controller";
import { auth } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

// 마이페이지 전체 조회
router.get("/", mypageController.getMypage);

// 마이페이지 개별 활동 조회
router.get("/creative/:activityId", mypageController.getCreativeActivity);
router.get("/subject/:activityId", mypageController.getSubjectActivity);
router.get("/book/:activityId", mypageController.getBookActivity);
router.get("/prize/:activityId", mypageController.getPrizeActivity);

// 마이페이지 개별 활동 삭제
// router.delete("/creative/:activityId", mypageController.deleteCreativeActivity);

export default router;
