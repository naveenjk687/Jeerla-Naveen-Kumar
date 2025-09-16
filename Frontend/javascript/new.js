// Get the first number
let num1 = parseFloat(prompt("Enter the first number:"));

// Get the second number
let num2 = parseFloat(prompt("Enter the second number:"));

// Get the operation from the user
let operation = prompt("Enter the operation (+, -, *, /):");

let result;

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid numbers.");
} else {
  switch (operation) {
    case '+':
      result = num1 + num2;
      alert(`Result: ${num1} + ${num2} = ${result}`);
      break;
    case '-':
      result = num1 - num2;
      alert(`Result: ${num1} - ${num2} = ${result}`);
      break;
    case '*':
      result = num1 * num2;
      alert(`Result: ${num1} * ${num2} = ${result}`);
      break;
    case '/':
      if (num2 === 0) {
        alert("Error: Cannot divide by zero.");
      } else {
        result = num1 / num2;
        alert(`Result: ${num1} / ${num2} = ${result}`);
      }
      break;
    default:
      alert("Invalid operation! Please enter one of +, -, *, /.");
  }
}
