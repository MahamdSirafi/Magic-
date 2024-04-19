import mover_item from "../models/mover_item_Model";
import Mover from "../models/moverModel";
import Item from "../models/itemModel";
import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catchAsync";
import { STATUS_CODE } from "../types/helper.types";
import Log from "../models/logModel";
import AppError from "../utils/appError";
export const createItem = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const mover = await Mover.findById(req.body.mover);
    const IdItems = await mover_item.find({
      mover: req.body.mover,
      done: false,
    });
    let sum_weight = 0;
    let thisitem = await Item.findById(req.body.item);
    if (thisitem) sum_weight += thisitem.weight;
    for (let i = 0; i < IdItems.length; i++) {
      let thisitem = await Item.findById(IdItems[i].item);
      if (thisitem) sum_weight += thisitem.weight;
    }
    if (mover && mover.weight_limit < sum_weight)
      next(
        new AppError(
          STATUS_CODE.BAD_REQUEST,
          [],
          "this mover can't Move this item"
        )
      );
    const doc = await mover_item.create(req.body);
    await Log.create({
      log: `The Mover that owns the number :${req.body.mover}. has been loaded with item that owns the number :${req.body.item}`,
    });
    res.status(STATUS_CODE.CREATED).json({
      status: "success",
      doc,
    });
  }
);

export const done = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const doc = await mover_item.updateMany(
      { mover: req.params.id },
      { $set: { done: true } },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!doc) {
      return next(
        new AppError(
          STATUS_CODE.NOT_FOUND,
          [],
          "No document found with that ID"
        )
      );
    }
    next();
  }
);
