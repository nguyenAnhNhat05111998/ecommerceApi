import { Request, Response } from "express";
import { createUserService } from "../service/user.service";
import logger from "../utils/logger";

const createUser = async (req: Request, res: Response) => {
  try {
    console.log({ req });
    const user = await createUserService(req.body);
    return res.send(user);
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
};

export { createUser };
