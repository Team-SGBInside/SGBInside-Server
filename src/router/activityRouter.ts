import { Router } from "express";
import { activityController } from "../controller";
const router: Router = Router();

router.post("/creative", activityController.createCreativeActivity);
router.post("/subject", activityController.createSubjectDetailedActivity);
export default router;
