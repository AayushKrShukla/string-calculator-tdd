export class StringCalculator {
  add(numbersString: string): number {
    if (numbersString === "") {
      return 0;
    }

    if (numbersString.includes("//")) {
      const [delimiter, nums] = numbersString.substring(2).split("\n");
      const numbers = this.parseNumbers(nums || "", delimiter);
      const sum = this.sum(numbers);
      return sum;
    }

    const numbers = this.parseNumbers(numbersString);
    const sum = this.sum(numbers);
    return sum;
  }

  parseNumbers(numbers: string, customDelimiter?: string): number[] {
    const delimiter = customDelimiter
      ? RegExp(`${customDelimiter}`, "g")
      : RegExp("[\n,]", "g");
    const parsedNumbers = numbers
      .split(delimiter)
      .map((number) => parseInt(number));
    return parsedNumbers;
  }

  sum(numbers: number[]): number {
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  }
}
