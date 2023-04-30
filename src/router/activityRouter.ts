import { Router } from "express";
import { activityController } from "../controller";
import auth from "../middlewares/auth";
import { body } from "express-validator";

const router: Router = Router();

router.post("/creative", activityController.createCreativeActivity);
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
export default router;
