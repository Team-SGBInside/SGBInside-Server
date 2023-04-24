import { Request, Response } from "express";
import { userService } from "../service";

// 유저 생성
const createUser = async (req: Request, res: Response) => {
  const { loginId, password, name, school, grade, isTeen } = req.body;

  const data = await userService.createUser(
    loginId,
    password,
    name,
    school,
    grade,
    isTeen
  );

  if (!data) {
    return res
      .status(400)
      .json({ status: 400, message: "회원가입에 실패했습니다." });
  }
  return res
    .status(200)
    .json({ status: 200, message: "회원가입에 성공했습니다.", data });
};

const userController = {
  createUser,
};

export default userController;
