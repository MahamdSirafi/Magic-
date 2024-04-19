import { Request, Response, NextFunction } from "express";

export default (fn: CallableFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    //catch make a return for the program
    fn(req, res, next).catch(next);
  };
};
