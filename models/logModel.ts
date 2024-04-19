import { Schema, model } from "mongoose";
import { LogDoc, LogModel } from "../types/log.types";
const logSchema = new Schema<LogDoc, LogModel>(
  {
    log: {
      type: String,
      required: [true, "enter log"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Log = model<LogDoc>("Log", logSchema);
export default Log;
