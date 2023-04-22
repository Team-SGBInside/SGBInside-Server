import { Router } from "express";
import { activityController } from "../controller";
const router: Router = Router();

router.post("/activity/:activityId", activityController.createCreativeActivity);

export default router;
