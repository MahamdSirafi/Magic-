import { Schema, model, Types } from "mongoose";
import { Mover } from "./moverModel";
import { Item } from "./itemModel";
export const DOCUMENT_NAME = "Mover_Item";
export const COLLECTION_NAME = "movers_items";
export interface Mover_Item {
  _id: Types.ObjectId;
  mover: Mover;
  item: Item;
  done: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
const schema = new Schema<Mover_Item>(
  {
    mover: {
      type: Schema.Types.ObjectId,
      ref: "Mover",
      required: [true, "Enter mover"],
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: [true, "The mover must have an item."],
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const Mover_itemModel = model<Mover_Item>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
