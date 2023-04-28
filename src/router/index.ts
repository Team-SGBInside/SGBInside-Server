import { Router } from "express";
import activityRouter from "./activityRouter";
import userRouter from "./userRouter";

const router: Router = Router();

router.use("/activity", activityRouter);
router.use("/auth", userRouter);

export default router;
