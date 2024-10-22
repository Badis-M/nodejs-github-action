const { sum, subtract, multiply, divide } = require('../src/math');

// Tests pour l'addition
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 5 to equal 4', () => {
  expect(sum(-1, 5)).toBe(4);
});

// Tests pour la soustraction
test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('subtracts 3 - 5 to equal -2', () => {
  expect(subtract(3, 5)).toBe(-2);
});

// Tests pour la multiplication
test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplies -2 * 4 to equal -8', () => {
  expect(multiply(-2, 4)).toBe(-8);
});

// Tests pour la division
test('divides 6 / 3 to equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('divides 5 / 2 to equal 2.5', () => {
  expect(divide(5, 2)).toBe(2.5);
});

// Test pour la gestion de l'erreur "division par zéro"
test('throws error when dividing by 0', () => {
  expect(() => {
    divide(5, 0);
  }).toThrow('Division by zero is not allowed');
});