interface ParseDelimiterResult {
  delimiter: string[];
  numbersString: string;
}

export class StringCalculator {
  defaultDelimiter = "[,\\n]";

  add(numString: string): number {
    if (numString === "") {
      return 0;
    }

    const { delimiter, numbersString } = this.parseDelimiter(numString);

    const numbers = this.parseNumbers(numbersString, delimiter);
    this.validateNegativeNumbers(numbers);
    const sum = this.sum(numbers);
    return sum;
  }

  parseDelimiter(numbersString: string): ParseDelimiterResult {
    if (numbersString.includes("//")) {
      const lines = numbersString.split("\n");
      let delimiterString = lines[0]?.slice(2);
      const numbers = lines[1] || "";

      if (
        delimiterString &&
        delimiterString.startsWith("[") &&
        delimiterString.endsWith("]")
      ) {
        return {
          delimiter: this.extractMultipleDelimiters(delimiterString),
          numbersString: numbers,
        };
      }

      const delimiter = delimiterString || this.defaultDelimiter;
      return { delimiter: [delimiter], numbersString: numbers };
    }

    return { delimiter: [this.defaultDelimiter], numbersString };
  }

  extractMultipleDelimiters(delimiterString: string): string[] {
    const delimiters = [];
    let tempStr = delimiterString;
    while (tempStr) {
      const startIndex = tempStr.indexOf("[");
      const endIndex = tempStr.indexOf("]");
      const delimiter = tempStr.slice(startIndex + 1, endIndex);
      delimiters.push(delimiter);
      tempStr = tempStr.slice(endIndex + 1);
    }
    return delimiters;
  }

  parseNumbers(numbers: string, delimiters: string[]): number[] {
    if (!numbers) return [];

    let result: string[] = [numbers];
    for (const delimiter of delimiters) {
      result = this.splitByDelimiter(result, delimiter);
    }
    const parsedNumbers = result
      .filter((num) => num.trim())
      .map((num) => parseInt(num));
    return parsedNumbers;
  }

  splitByDelimiter(numsString: string[], delimiter: string): string[] {
    const result = [];

    for (const numString of numsString) {
      if (delimiter === this.defaultDelimiter) {
        result.push(...numString.split(new RegExp(delimiter)));
      } else {
        result.push(...numString.split(delimiter));
      }
    }

    return result;
  }

  validateNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }
  }

  sum(numbers: number[]): number {
    const sum = numbers
      .filter((number) => number <= 1000)
      .reduce((sum, number) => sum + number, 0);
    return sum;
  }
}
