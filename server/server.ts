import { convertToRomanNumeralRouterSSE } from "./routes/convertToRomanNumeralSSE.router";
import { convertToRomanNumeralRouter } from "./routes/convertToRomanNumeral.router";

import express from "express";
import { Express, Request, Response, NextFunction } from "express";
import { addSSEHeader } from "./middlewares/addSSEHeader.middleware";

export const createServer = () => {
  const app: Express = express();

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.use("/v1", convertToRomanNumeralRouter);
  app.use("/v2", addSSEHeader, convertToRomanNumeralRouterSSE);

  return app;
};
