import { Request, Response, NextFunction } from "express";
export const addBody = (value: Object) => {
  return (req: Request, res: Response, next: NextFunction) => {
    req.body = value;
    next();
  };
};
