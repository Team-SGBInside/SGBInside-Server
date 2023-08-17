import { Router } from "express";
import { mypageController } from "../controller";
import { auth, upload } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

// 마이페이지 계정정보 조회
// router.get("/my", mypageController.getAccountInfo);

// 마이페이지 개별 활동 조회
router.get("/creative/:activityId", auth, mypageController.getCreativeActivity);
router.get("/subject/:activityId", auth, mypageController.getSubjectActivity);
router.get("/book/:activityId", auth, mypageController.getBookActivity);
router.get("/prize/:activityId", auth, mypageController.getPrizeActivity);

// 마이페이지 개별 활동 삭제
router.delete(
  "/creative/:activityId",
  auth,
  mypageController.deleteCreativeActivity
);
router.delete(
  "/subject/:activityId",
  auth,
  mypageController.deleteSubjectActivity
);
router.delete("/book/:activityId", auth, mypageController.deleteBookActivity);
router.delete("/prize/:activityId", auth, mypageController.deletePrizeActivity);

// 마이페이지 개별 활동 수정
router.post(
  "/creative/:activityId",
  auth,
  [
    body("name").trim().notEmpty(),
    body("startDate").trim().notEmpty(),
    body("endDate").trim().notEmpty(),
    body("semester").trim().notEmpty(),
    body("activityType").trim().notEmpty(),
    body("role").trim().notEmpty(),
  ],
  mypageController.updateCreativeActivity
);

router.post(
  "/subject/:activityId",
  auth,
  [
    body("subjectName").trim().notEmpty(),
    body("subjectContent").trim().notEmpty(),
    body("activitySemester").trim().notEmpty(),
    body("startDate").trim().notEmpty(),
    body("endDate").trim().notEmpty(),
    body("mainActivity").trim().notEmpty(),
    body("activityContentDetail").trim().notEmpty(),
  ],
  mypageController.updateSubjectActivity
);

router.post(
  "/prize/:activityId",
  auth,
  upload.single("file"),
  [
    body("name").trim().notEmpty(),
    body("date").trim().notEmpty(),
    body("semester").trim().notEmpty(),
    body("role").trim().notEmpty(),
    body("thoughts").trim().notEmpty(),
  ],
  mypageController.updatePrizeActivity
);

router.post(
  "/book/:activityId",
  auth,
  [
    body("titleAuthor").trim().notEmpty(),
    body("endDate").trim().notEmpty(),
    body("semester").trim().notEmpty(),
    body("thoughts").trim().notEmpty(),
    body("relatedSubjects").trim().notEmpty(),
  ],
  mypageController.updateBookActivity
);

// 마이페이지 계정정보 및 전체 활동 조회
router.get("/", auth, mypageController.getMypage);

export default router;
