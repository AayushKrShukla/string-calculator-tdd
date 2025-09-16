export class StringCalculator {
  add(numbersString: string): number {
    if (numbersString === "") {
      return 0;
    }

    const replacedString = numbersString.replace(/\n/g, ",");

    if (replacedString.includes(",")) {
      const parts: string[] = replacedString.split(",");
      const sum = parts.reduce((sum, part) => (sum += parseInt(part)), 0);
      return sum;
    }

    return parseInt(replacedString);
  }
}
