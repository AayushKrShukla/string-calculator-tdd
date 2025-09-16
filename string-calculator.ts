export class StringCalculator {
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

  parseDelimiter(numbersString: string): {
    delimiter: string[];
    numbersString: string;
  } {
    const defaultDelimiter = "[,\\n]";
    if (numbersString.includes("//")) {
      const lines = numbersString.split("\n");
      let delimiterString = lines[0]?.slice(2);
      const delimiters = delimiterString ? [] : [defaultDelimiter];

      if (
        delimiterString &&
        delimiterString.startsWith("[") &&
        delimiterString.endsWith("]")
      ) {
        let tempStr = delimiterString;
        while (tempStr) {
          const startIndex = tempStr.indexOf("[");
          const endIndex = tempStr.indexOf("]");
          const delimiter = tempStr.slice(startIndex + 1, endIndex);
          delimiters.push(delimiter);
          tempStr = tempStr.slice(endIndex + 1);
        }
      }

      const numbers = lines[1] || "";
      return { delimiter: delimiters, numbersString: numbers };
    }

    return { delimiter: [defaultDelimiter], numbersString };
  }

  parseNumbers(numbers: string, delimiters: string[]): number[] {
    let nums = [numbers];
    for (let delimiter of delimiters) {
      if (delimiter === "[,\\n]") {
        const tempArray = [];
        for (let num of nums) {
          tempArray.push(...num.split(new RegExp(delimiter)));
        }
        nums = tempArray;
      } else {
        const tempArray = [];
        for (let num of nums) {
          tempArray.push(...num.split(delimiter));
        }
        nums = tempArray;
      }
    }
    const parsedNumbers = nums.filter((n) => n.trim()).map((n) => parseInt(n));
    return parsedNumbers;
  }

  validateNegativeNumbers(numbers: number[]) {
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
