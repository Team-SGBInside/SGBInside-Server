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
router.delete("/creative/:activityId", mypageController.deleteCreativeActivity);
router.delete("/subject/:activityId", mypageController.deleteSubjectActivity);
router.delete("/book/:activityId", mypageController.deleteBookActivity);
router.delete("/prize/:activityId", mypageController.deletePrizeActivity);

// // 마이페이지 개별 활동 수정
// router.update("/creative/:activityId", mypageController.updateCreativeActivity);
// router.update("/subject/:activityId", mypageController.updateSubjectActivity);
// router.update("/book/:activityId", mypageController.updateBookActivity);
// router.update("/prize/:activityId", mypageController.updatePrizeActivity);

export default router;
