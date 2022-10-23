import express from "express";
import { Request, Response } from "express";
import { validateNumeralParameter } from "../middlewares/validateNumeralParameter.middleware";
import { convertToRomanNumeral } from "../services/convertToRomanNumeral.service";

const router = express.Router();

router.get(
  "/convert/:num",
  validateNumeralParameter,
  (req: Request, res: Response) => {
    const result = convertToRomanNumeral(parseInt(req.params.num));
    return res.status(200).send({ data: result });
  }
);

export default router;
