class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    if (numbers.startsWith("//")) {
      const [delimiterPart, numPart] = numbers.split("\n");
      const delimiter = delimiterPart.slice(2);
      return this._sumNumbers(numPart, new RegExp(`[${delimiter},\n]`));
    }
    return this._sumNumbers(numbers, /[,\n]/);
  }

  _sumNumbers(numbers, delimiter) {
    const numList = numbers.split(delimiter).map(Number);
    const negatives = numList.filter(n => n < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    return numList.reduce((a, b) => a + b, 0);
  }
}

module.exports = StringCalculator;
