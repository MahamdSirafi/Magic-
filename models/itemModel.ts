import { Schema, model } from "mongoose";
import { ItemDoc, ItemModel } from "../types/item.types";

const itemSchema = new Schema<ItemDoc, ItemModel>(
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

const Item = model<ItemDoc>("Item", itemSchema);
export default Item;
