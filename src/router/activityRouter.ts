import { Router } from "express";
const router: Router = Router();

router.post("/activity/:activityId", activityController.createCreativeActivity);

export default router;
