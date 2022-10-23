import convertToRomanNumeral from "./routes/convertToRomanNumeral.router";
import express from "express";
import { Express, Request, Response, NextFunction } from "express";

export const createServer = () => {
  const app: Express = express();

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  app.use("/v1", convertToRomanNumeral);
  return app;
};
