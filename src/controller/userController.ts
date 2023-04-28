import { UserCreateDTO } from "./../interfaces/UserCreateDTO";
import { Request, Response } from "express";
import { userService } from "../service";
import { validationResult } from "express-validator";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import jwtHandler from "../modules/jwtHandler";

// 유저 생성
const createUser = async (req: Request, res: Response) => {
  // validation의 결과를 바탕으로 분기 처리
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const userCreateDTO: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDTO);

  if (!data) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL));
  }

  // jwtHandler 내 sign 함수를 이용해 accessToken 생성
  const accessToken = jwtHandler.sign(data.userId);

  const result = {
    id: data.userId,
    name: data.name,
    accessToken,
  };

  return res
    .status(sc.CREATED)
    .send(success(sc.CREATED, rm.SIGNIN_SUCCESS, data));
};

const userController = {
  createUser,
};

export default userController;
