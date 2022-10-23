import type { Config } from "jest";

const jestConfig: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  verbose: true,
  forceExit: true,
};

export default jestConfig;
