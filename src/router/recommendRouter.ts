import { Router } from "express";
import { recommendController, userController } from "../controller";
import { auth } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

// 대학생 창의적 체험활동 기록 바탕 추천 기능
router.get("/creative", recommendController.findCreativeActivity);

// 대학생 수상경력 기록 바탕 추천 기능
router.get("/prize", recommendController.findPrizeActivity);

// 학과별 권장도서 추천 기능
router.get("/book", recommendController.getBooksFromExcel);
export default router;
