import { Schema, model, Types } from "mongoose";
export const DOCUMENT_NAME = "Log";
export const COLLECTION_NAME = "logs";
export interface Log {
  _id: Types.ObjectId;
  log: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const schema = new Schema<Log>(
  {
    log: {
      type: String,
      required: [true, "enter log"],
      trim: true,
    },
  },
  { timestamps: true }
);
export const LogModel = model<Log>(DOCUMENT_NAME, schema, COLLECTION_NAME);
