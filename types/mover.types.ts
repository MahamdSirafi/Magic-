import { Model, Document } from "mongoose";
export interface IMover {
  weight_limit: number;
  Energy: number;
  quest_state: string;
}
export type MoverDoc = IMover & Document;
export type MoverModel = Model<MoverDoc, object, any>;
