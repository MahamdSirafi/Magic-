import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catchAsync";
import { STATUS_CODE } from "../types/helper.types";
import Mover from "../models/moverModel";
import Log from "../models/logModel";
import { createOne } from "../utils/handlerFactory";
import AppError from "../utils/appError";
export const createmover = createOne(Mover);

export const getAllMoverDone = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Mover.find({ quest_state: "done" });
    res.status(200).json({
      status: "success",
      doc,
    });
  }
);

export const updatemover = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Mover.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(
        new AppError(
          STATUS_CODE.NOT_FOUND,
          [],
          "No document found with that ID"
        )
      );
    }
    switch (req.body.quest_state) {
      case "loading": {
        await Log.create({
          log: `The Mover that owns the number :${req.params.id}. has quest state is loading`,
        });
        break;
      }
      case "on a mission": {
        await Log.create({
          log: `The Mover that owns the number :${req.params.id}. has quest state is on a mission`,
        });
        break;
      }
      case "done": {
        await Log.create({
          log: `The Mover that owns the number :${req.params.id}. has quest state is done`,
        });
        break;
      }
    }
    res.status(200).json({
      status: "success",
      doc,
    });
  }
);
