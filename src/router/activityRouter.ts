import { Router } from "express";
const router: Router = Router();

router.post("/activity/:activityId", activityController.createActivity);

export default router;
