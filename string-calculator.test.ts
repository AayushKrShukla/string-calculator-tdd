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
    expect(calculator.add("27")).toBe(27);
  });

  test("should return sum of two comma separated value", () => {
    expect(calculator.add("5,6")).toBe(11);
    expect(calculator.add("9,64")).toBe(73);
  });

  test("should return sum of any amount of comma separated values", () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15)
    expect(calculator.add("27,14,40,11,18")).toBe(110)
    expect(calculator.add("1, 2, 3")).toBe(6)
  })

  test("should handle new line between the numbers and return the sum", () => {
    expect(calculator.add("1\n2,3,4\n5")).toBe(15)
    expect(calculator.add("1,2\n3\n4,5")).toBe(15)
  })

  test("should allow custom delimiter to separate values", () => {
    expect(calculator.add("//;\n1;2;3")).toBe(6);
    expect(calculator.add("//;\n7;11")).toBe(18);
  });
});
