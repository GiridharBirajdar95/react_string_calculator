const StringCalculator = require('../src/string_calculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('returns 0 for empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('returns the number itself if single number is provided', () => {
    expect(calculator.add("1")).toBe(1);
  });

  test('returns sum of two numbers', () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  test('handles new line as delimiter', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test('throws exception for negative numbers', () => {
    expect(() => calculator.add("1,-2,3,-4"))
      .toThrow("negative numbers not allowed -2,-4");
  });
});
