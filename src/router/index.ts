import { Router } from "express";
import activityRouter from "./activityRouter";
import userRouter from "./userRouter";
import { auth } from "../middlewares";
const router: Router = Router();

router.use("/auth", userRouter);
router.use("/activity", auth, activityRouter);

export default router;
