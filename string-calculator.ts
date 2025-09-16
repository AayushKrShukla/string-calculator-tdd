export class StringCalculator {
  add(numbersString: string): number {
    if (numbersString === "") {
      return 0;
    }

    const numbers = this.parseNumbers(numbersString);
    const sum = this.sum(numbers);
    return sum;
  }

  parseNumbers(numbers: string): number[] {
    const parsedNumbers = numbers.split(/[\n,]/g).map(number => parseInt(number));
    return parsedNumbers;
  }

  sum(numbers: number[]): number {
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  }
}
