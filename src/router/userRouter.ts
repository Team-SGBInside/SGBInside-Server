import { Router } from "express";
import { userController } from "../controller";
import { auth } from "../middlewares";

const router: Router = Router();

// 유저 생성 - POST ~/auth
router.post("/", auth, userController.createUser);

export default router;
