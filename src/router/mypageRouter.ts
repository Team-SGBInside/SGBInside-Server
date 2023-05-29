import { Router } from "express";
import { mypageController } from "../controller";
import { auth } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

router.get("/", auth, mypageController.getMypage);

export default router;
