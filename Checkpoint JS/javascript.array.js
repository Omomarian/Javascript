// finding max and min value
function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }
  return Math.max(...arr);
}

function findMin(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }
  return Math.min(...arr);
}

// Example usage:
const number = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Maximum value:", findMax(number)); // Output: Maximum value: 9
console.log("Minimum value:", findMin(number)); // Output: Minimum value: 1

//Calculate the sum of all element
function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// Example usage:
const numb = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Sum of array elements:", sumArray(number)); // Output: Sum of array elements: 44

//Fiter array method
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// Example usage:

// Condition function to filter out even numbers
function isOdd(num) {
  return num % 2 !== 0;
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const oddNumbers = filterArray(numbers, isOdd);
console.log("Filtered array (only odd numbers):", oddNumbers); // Output: Filtered array (only odd numbers): [3, 1, 1, 5, 9, 5, 3, 5]

// Condition function to filter out numbers greater than 4
function greaterThanFour(num) {
  return num > 4;
}

const numbersGreaterThanFour = filterArray(numbers, greaterThanFour);
console.log("Filtered array (numbers > 4):", numbersGreaterThanFour); // Output: Filtered array (numbers > 4): [5, 9, 5, 5]
