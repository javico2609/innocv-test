import {extractAllNumbersFromExpression, extractAllOperatorsFromExpression, isValidExpression} from "../calculator";

const validExpression = [
  '3+3',
  '4*9+5-6',
  '5/5+5-5+9',
  '5/5+5--5+9',
];

const inValidExpression = [
  '3**9',
  '4*9+5-',
  '5/5+5-/5+9',
  '5/5+5--*5+9',
];

describe("Valid expressions", () => {
  test.each(validExpression)("given %p", (expression) => {
      expect(isValidExpression(expression)).toEqual(true);
    }
  );
});

describe("Invalid expressions", () => {
  test.each(inValidExpression)("given %p", (expression) => {
      expect(isValidExpression(expression)).toEqual(false);
    }
  );
});

test('extract all numbers from expression', () => {
  expect(extractAllNumbersFromExpression('9*10+44-67/3%8')).toEqual([9, 10, 44, 67, 3, 8]);
});

test('extract all numbers including decimal from expression', () => {
  expect(extractAllNumbersFromExpression('9*10+44-67/3%8*99.5')).toEqual([9, 10, 44, 67, 3, 8, 99.5]);
});

test('extract all operators from expression', () => {
  expect(extractAllOperatorsFromExpression('9*10+44-67/3%8')).toEqual(['*', '+', '-', '/']);
});