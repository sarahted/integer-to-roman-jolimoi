import express from "express";
import { Request, Response } from "express";
import { validateNumeralParameter } from "../middlewares/validateNumeralParameter.middleware";
import { convertToRomanNumeral } from "../services/convertToRomanNumeral.service";

const convertToRomanNumeralRouterSSE = express.Router();

convertToRomanNumeralRouterSSE.get(
  "/convert/:num",
  validateNumeralParameter,
  (req: Request, res: Response) => {
    res.write("data: working on solution ! Please wait ...\n\n");
    const result = convertToRomanNumeral(parseInt(req.params.num));
    setTimeout(() => {
      return res.status(200).write(`data: ${result}\n\n`);
    }, 1000);
  }
);

export { convertToRomanNumeralRouterSSE };
