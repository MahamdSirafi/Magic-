import { Schema, model, Types } from "mongoose";
export const DOCUMENT_NAME = "Item";
export const COLLECTION_NAME = "items";
export interface Item {
  _id: Types.ObjectId;
  name: string;
  weight: number;
  createdAt?: Date;
  updatedAt?: Date;
}
const schema = new Schema<Item>(
  {
    name: {
      type: String,
      required: [true, "enter name"],
      trim: true,
    },
    weight: {
      type: Number,
      required: [true, "enter how much magic power it needs"],
    },
  },
  { timestamps: true }
);

export const ItemModel = model<Item>(DOCUMENT_NAME, schema, COLLECTION_NAME);
