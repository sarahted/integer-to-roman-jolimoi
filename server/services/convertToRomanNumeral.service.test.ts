import { convertToRomanNumeral } from "./convertToRomanNumeral.service";

describe("convert to roman numeral service", () => {
  describe("Given a number which is not in interval 1 to 100", () => {
    it("Should return empty if number is less than 0 ", () => {
      const result = convertToRomanNumeral(0);
      expect(result).toEqual("");
    });

    it("Should return empty if number is less than 0 ", () => {
      const result = convertToRomanNumeral(-1);
      expect(result).toEqual("");
    });

    it("Should return empty if number is more than 100 ", () => {
      const result = convertToRomanNumeral(101);
      expect(result).toEqual("");
    });

    it("Should return empty if number is more than 100 ", () => {
      const result = convertToRomanNumeral(100011);
      expect(result).toEqual("");
    });

    it("Should return empty if number is more than 100 ", () => {
      const result = convertToRomanNumeral(100011);
      expect(result).toEqual("");
    });
  });

  describe("Given a number which is in interval 1 to 100", () => {
    it("Should return I if number = 1", () => {
      const result = convertToRomanNumeral(1);
      expect(result).toEqual("I");
    });

    it("Should return C if number = 100", () => {
      const result = convertToRomanNumeral(100);
      expect(result).toEqual("C");
    });

    it("Should return C if number = 10", () => {
      const result = convertToRomanNumeral(10);
      expect(result).toEqual("X");
    });

    it("Should return C if number = 9", () => {
      const result = convertToRomanNumeral(9);
      expect(result).toEqual("IX");
    });

    it("Should return C if number = 49", () => {
      const result = convertToRomanNumeral(49);
      expect(result).toEqual("XLIX");
    });

    it("Should return C if number = 99", () => {
      const result = convertToRomanNumeral(99);
      expect(result).toEqual("XCIX");
    });

    it("Should return C if number = 87", () => {
      const result = convertToRomanNumeral(87);
      expect(result).toEqual("LXXXVII");
    });

    it("Should return C if number =3", () => {
      const result = convertToRomanNumeral(3);
      expect(result).toEqual("III");
    });

    it("Should return C if number =40", () => {
      const result = convertToRomanNumeral(40);
      expect(result).toEqual("XL");
    });
  });
});
