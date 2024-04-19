import { Model } from "mongoose";
import { Request, Response, NextFunction, RequestHandler } from "express";
import catchAsync from "./catchAsync";
/**
 * Creates a new document of the specified model.
 * @param {Model<Document>} Model - The Mongoose model.
 * @returns {RequestHandler} - Express middleware function.
 */
export const createOne = (Model: Model<any>, addFiled?: any): RequestHandler =>
  catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      if (addFiled) req.body = { ...req.body, ...addFiled };
      const newDoc = await Model.create(req.body);
      res.status(200).json(newDoc);
    }
  );
