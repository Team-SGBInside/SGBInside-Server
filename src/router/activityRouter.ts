import { Router } from "express";
import { activityController } from "../controller";
const router: Router = Router();

router.post("/", activityController.createCreativeActivity);

export default router;
