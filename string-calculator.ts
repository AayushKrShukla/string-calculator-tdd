export class StringCalculator {
  add(numbersString: string): number {
    if (numbersString === "") {
      return 0;
    }

    if (numbersString.includes(",")) {
      const parts: string[] = numbersString.split(",");
      if (parts.length >= 2 && parts[0] && parts[1]) {
        return parseInt(parts[0]) + parseInt(parts[1]);
      }
    }

    return parseInt(numbersString);
  }
}
