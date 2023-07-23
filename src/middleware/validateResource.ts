import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
import { AnyZodObject } from "zod";

const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      logger.error("validateResource:", e);
      return res.status(400).send(e.error);
    }
  };

export default validateResource;
