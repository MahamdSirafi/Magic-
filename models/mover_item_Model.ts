import { Schema, model } from "mongoose";
import { Mover_Item_Doc, Mover_Item_Model } from "../types/Mover_Item.types";
const Mover_itemSchema = new Schema<Mover_Item_Doc, Mover_Item_Model>(
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
const Mover_item = model<Mover_Item_Doc>("Mover_item", Mover_itemSchema);
export default Mover_item;
