import { Router } from "express";
import { userController } from "../controller";
import { auth } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

// 유저 생성 - POST ~/auth
router.post(
  "/",
  [
    body("loginId").trim().notEmpty(),
    body("password").trim().notEmpty(),
    body("name").trim().notEmpty(),
    body("school").trim().notEmpty(),
    body("grade").trim().notEmpty(),
    body("isTeen").trim().notEmpty(),
  ],
  userController.createUser
);

// 로그인 - POST ~/auth/signin
router.post(
  "/signin",
  [body("loginId").notEmpty(), body("password").notEmpty()],
  userController.signInUser
);
export default router;
