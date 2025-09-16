export class StringCalculator {
  add(numbersString: string): number {
    if (numbersString === "") {
      return 0;
    }

    if (numbersString.includes(",")) {
      const parts: string[] = numbersString.split(",");
      const sum = parts.reduce((sum, part) => (sum += parseInt(part)), 0);
      return sum;
    }

    return parseInt(numbersString);
  }
}
