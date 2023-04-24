import { Router } from "express";
import activityRouter from "./activityRouter";

const router: Router = Router();

router.use("/activity", activityRouter);

export default router;
