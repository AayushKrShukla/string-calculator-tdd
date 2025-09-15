export class StringCalculator {
  add(numbersString: string): number {
    if (numbersString === "") {
      return 0;
    }

    return parseInt(numbersString);
  }
}
