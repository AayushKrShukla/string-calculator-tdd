export class StringCalculator {
  add(numbersString: string): number {
    if (numbersString === "") {
      return 0;
    }

    if (numbersString.includes(",")) {
      const parts: string[] = numbersString.split(",");
      return parseInt(parts[0]!) + parseInt(parts[1]!);
    }

    return parseInt(numbersString);
  }
}
