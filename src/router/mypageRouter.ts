import { Router } from "express";
import { mypageController } from "../controller";
import { auth, upload } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

// 마이페이지 계정정보 조회
// router.get("/my", mypageController.getAccountInfo);

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

// 마이페이지 개별 활동 수정
router.post("/creative/:activityId", mypageController.updateCreativeActivity);
router.post("/subject/:activityId", mypageController.updateSubjectActivity);
router.post("/book/:activityId", mypageController.updateBookActivity);
router.post(
  "/prize/:activityId",
  upload.single("file"),
  mypageController.updatePrizeActivity
);

// 마이페이지 계정정보 및 전체 활동 조회
router.post("/", mypageController.getMypage);

export default router;
