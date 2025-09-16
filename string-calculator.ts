export class StringCalculator {
  add(numbersString: string): number {
    if (numbersString === "") {
      return 0;
    }

    if (numbersString.includes(",")) {
      const parts: string[] = numbersString.split(",");
      let sum = 0;
      for (const part of parts) {
        const parsed = parseInt(part);
        sum += parsed;
      }
      return sum;
    }

    return parseInt(numbersString);
  }
}
