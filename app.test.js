const { add, subtract } = require('./app');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds -1 + -1 to equal -2', () => {
  expect(add(-1, -1)).toBe(-2);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('subtracts 0 - 3 to equal -3', () => {
  expect(subtract(0, 3)).toBe(-3);
});
