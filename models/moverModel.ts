import { Schema, model } from "mongoose";
import { MoverDoc, MoverModel } from "../types/mover.types";
const moverSchema = new Schema<MoverDoc, MoverModel, any>(
  {
    weight_limit: { type: Number, required: [true, "Enter weight limit"] },
    Energy: {
      type: Number,
      required: [true, "Enter total magic power"],
    },
    quest_state: {
      type: String,
      enum: ["resting", "loading", "on a mission", "done"],
      default: "resting",
    },
  },
  { timestamps: true }
);
const Mover = model<MoverDoc>("Mover", moverSchema);
export default Mover;
