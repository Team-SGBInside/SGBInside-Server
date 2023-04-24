import { Router } from "express";
import { userController } from "../controller";

const router = Router();

// 유저 생성 - POST
router.post("/", userController.createUser);

export default router;
