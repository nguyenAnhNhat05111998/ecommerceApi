import { omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";

const createUserService = async (input: UserDocument) => {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
};

export { createUserService };
