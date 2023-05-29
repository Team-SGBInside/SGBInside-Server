import { Router } from "express";
import mypageRouter from "./mypageRouter";
import activityRouter from "./activityRouter";
import userRouter from "./userRouter";
import { auth } from "../middlewares";
const router: Router = Router();

router.use("/auth", userRouter);
router.use("/activity", auth, activityRouter);
router.use("/mypage", auth, mypageRouter);

export default router;
