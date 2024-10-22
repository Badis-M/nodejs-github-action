// Addition
function sum(a, b) {
    return a + b;
  }
  
  // Soustraction
  function subtract(a, b) {
    return a - b;
  }
  
  // Multiplication
  function multiply(a, b) {
    return a * b;
  }
  
  // Division avec gestion des erreurs (division par zéro)
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
  
  module.exports = {
    sum,
    subtract,
    multiply,
    divide,
  };