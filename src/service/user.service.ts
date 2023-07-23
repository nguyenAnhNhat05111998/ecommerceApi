import { omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";
import { FilterQuery } from "mongoose";

const createUserService = async (input: UserDocument) => {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
};

async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
}

async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}

export { findUser, validatePassword, createUserService };
