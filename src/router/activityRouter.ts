import { Router } from "express";
import { activityController } from "../controller";
import { auth, upload } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

router.post(
  "/creative",
  [
    body("name").trim().notEmpty(),
    body("activityType").trim().notEmpty(),
    body("startDate").trim().notEmpty(),
    body("endDate").trim().notEmpty(),
    body("semester").trim().notEmpty(),
    body("role").trim().notEmpty(),
  ],
  activityController.createCreativeActivity
);
router.post(
  "/subject",
  [
    body("subjectName").trim().notEmpty(),
    body("subjectContent").trim().notEmpty(),
    body("activitySemester").trim().notEmpty(),
    body("startDate").trim().notEmpty(),
    body("endDate").trim().notEmpty(),
    body("mainActivity").trim().notEmpty(),
    body("activityContentDetail").trim().notEmpty(),
  ],
  activityController.createSubjectDetailedActivity
);

router.post(
  "/prize",
  upload.single("file"),
  [
    body("name").trim().notEmpty(),
    body("date").trim().notEmpty(),
    body("semester").trim().notEmpty(),
    body("role").trim().notEmpty(),
  ],
  activityController.createPrizeActivity
);

router.post(
  "/book",
  [
    body("titleAuthor").trim().notEmpty(),
    body("startDate").trim().notEmpty(),
    body("endDate").trim().notEmpty(),
    body("semester").trim().notEmpty(),
    body("thoughts").trim().notEmpty(),
    body("relatedSubject").trim().notEmpty(),
  ],
  activityController.createBookActivity
);

export default router;
