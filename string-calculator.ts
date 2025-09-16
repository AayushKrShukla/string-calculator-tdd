export class StringCalculator {
  add(numString: string): number {
    if (numString === "") {
      return 0;
    }

    const { delimiter, numbersString } = this.parseDelimiter(numString);

    const numbers = this.parseNumbers(numbersString, delimiter);
    const sum = this.sum(numbers);
    return sum;
  }

  parseDelimiter(numbersString: string): {
    delimiter: string;
    numbersString: string;
  } {
    const defaultDelimiter = "[,\\n]";
    if (numbersString.includes("//")) {
      const lines = numbersString.split("\n");
      const delimiter = lines[0]?.slice(2) || defaultDelimiter;
      const numbers = lines[1] || "";
      console.log(delimiter);
      console.log(numbers);
      return { delimiter: delimiter, numbersString: numbers };
    }

    return { delimiter: defaultDelimiter, numbersString };
  }

  parseNumbers(numbers: string, delimiter: string = "[,\\n]"): number[] {
    const parsedNumbers = numbers
      .split(new RegExp(delimiter))
      .map((number) => parseInt(number));
    const negativeNumbers = parsedNumbers.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }
    return parsedNumbers;
  }

  sum(numbers: number[]): number {
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  }
}
