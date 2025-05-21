import { sum, capitalize } from "./testPractice.js";
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize', () => {
  expect(capitalize("brown")).toBe("Brown");
});

test('reverses string', () => {
  expect(reverseString('mop')).toBe('pom');
});

describe('calculator operations', () => {
  test('add', () => {
    expect(calculator.add(5, 6)).toBe(11);
  });
  test('subtract', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
  test('divide', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  })
  test('multiply', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  })
});

