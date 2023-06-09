import { Router } from "express";
import mypageRouter from "./mypageRouter";
import activityRouter from "./activityRouter";
import userRouter from "./userRouter";
import recommendRouter from "./recommendRouter";
// import { auth } from "../middlewares";
const router: Router = Router();

router.use("/auth", userRouter);
router.use("/activity", activityRouter);
router.use("/recommend", recommendRouter);
router.use("/mypage", mypageRouter);

export default router;
