import { Request, Response, NextFunction } from "express";

export const validateNumeralParameter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const num = parseInt(req.params.num);
  if (!Number.isInteger(num) || num < 1 || num > 100) {
    return res.status(400).send({
      error:
        "The number passed as parameter is not between 1 and 100. Can not be supported by this application",
    });
  }
  next();
};
