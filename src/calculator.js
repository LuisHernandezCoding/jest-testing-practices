const sum = require('./sum');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

// Create a Calculator class
class Calculator {
  constructor() {
    this.sum = sum;
    this.subtract = subtract;
    this.divide = divide;
    this.multiply = multiply;
  }
}

module.exports = Calculator;