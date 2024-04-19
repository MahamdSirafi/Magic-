import { config } from "dotenv";
config();
export const settings = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 5000,
  DATABASE_LOCAL: process.env.DATABASE_LOCAL,
};
