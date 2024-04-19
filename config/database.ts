import mongoose from "mongoose";
import { settings } from "./settings";
const DB: any = settings.DATABASE_LOCAL;
const ConnDB = async () => {
  return mongoose
    .connect(DB)
    .then(() => console.log("DB connection succeeded"))
    .catch(() => console.log("Mongo connection error"));
};

export default ConnDB;
