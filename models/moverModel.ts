import { Schema, model, Types } from "mongoose";
export const DOCUMENT_NAME = "Mover";
export const COLLECTION_NAME = "movers";
export  interface Mover {
  _id: Types.ObjectId;
  weight_limit: number;
  Energy: number;
  quest_state: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const schema = new Schema<Mover>(
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
export const MoverModel = model<Mover>(DOCUMENT_NAME, schema, COLLECTION_NAME);
