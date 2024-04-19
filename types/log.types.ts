import { Document, Model } from "mongoose";

export interface ILog {
  log: string;
}
export type LogDoc = ILog & Document;

export type LogModel = Model<LogDoc, object, any>;
