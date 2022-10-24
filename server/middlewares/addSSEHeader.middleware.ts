import { Request, Response, NextFunction } from "express";

export const addSSEHeader = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader("Content-Type", "text/event-stream");
  next();
};
