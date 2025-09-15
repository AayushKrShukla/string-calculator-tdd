export class StringCalculator {
  add(numbersString: string) {
    if (numbersString === "") {
      return 0;
    }

    return parseInt(numbersString);
  }
}
