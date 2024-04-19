import { Document, Model } from "mongoose";

export interface IItem {
  name: string;
  weight: number;
}

export type ItemDoc = IItem & Document;
export type ItemModel = Model<ItemDoc, object, any>;
