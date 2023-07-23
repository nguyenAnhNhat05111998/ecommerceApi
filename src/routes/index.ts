import { createUser } from "../controller/user.controller";
import { Express } from "express";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";

function routes(app: Express) {
  app.post(
    "/api/auth/register",
    validateResource(createUserSchema),
    createUser
  );
}

export default routes;
