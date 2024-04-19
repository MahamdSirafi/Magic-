import { Document, Model, ObjectId, PopulatedDoc } from "mongoose";
import { IMover } from "./mover.types";
import { IItem } from "./item.types";

export interface IMover_Item {
  done: boolean;
  mover: PopulatedDoc<Document<ObjectId>> & IMover;
  item: PopulatedDoc<Document<ObjectId>> & IItem;
}
export interface Mover_Item_Doc extends IMover_Item, Document {
  createdAt: Date;
  updatedAt: Date;
}
export type Mover_Item_Model = Model<Mover_Item_Doc, object, any>;
