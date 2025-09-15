import { StringCalculator } from "./string-calculator";

describe("String Calculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });
  test("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number when string has a single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("should return sum of comma separated value", () => {
    expect(calculator.add("5,6")).toBe(11);
  });
});
