import { romanNumerals } from "../romanNumerals";
//import { findSmallestNearestNumber } from "./findSmallestNearestNumber.service";

export const convertToRomanNumeral = (num: number): string => {
  let result = "";

  if (num < 1 || num > 100) {
    return result;
  }

  let rest = num;
  for (const element of romanNumerals) {
    const repetition = Math.floor(rest / element.originalNumber);
    if (repetition != 0) {
      result += element.romanSymbol.repeat(repetition);
      rest %= element.originalNumber;
      if (rest === 0) return result;
    }
  }
  return result;
};
