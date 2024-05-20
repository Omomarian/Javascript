// Recursive approach
function factorialRecursive(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Iterative approach
function factorialIterative(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
console.log("Factorial of 5 (recursive):", factorialRecursive(5)); // Output: Factorial of 5 (recursive): 120
console.log("Factorial of 5 (iterative):", factorialIterative(5)); // Output: Factorial of 5 (iterative): 120
console.log("Factorial of 0 (recursive):", factorialRecursive(0)); // Output: Factorial of 0 (recursive): 1
console.log("Factorial of 0 (iterative):", factorialIterative(0)); // Output: Factorial of 0 (iterative): 1

// if a number is prime or not
function isPrime(n) {
  if (n <= 1) {
    return false; // 0 and 1 are not prime numbers
  }
  if (n <= 3) {
    return true; // 2 and 3 are prime numbers
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false; // eliminate multiples of 2 and 3
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log("Is 2 prime?", isPrime(2)); // Output: Is 2 prime? true
console.log("Is 3 prime?", isPrime(3)); // Output: Is 3 prime? true
console.log("Is 4 prime?", isPrime(4)); // Output: Is 4 prime? false
console.log("Is 17 prime?", isPrime(17)); // Output: Is 17 prime? true
console.log("Is 18 prime?", isPrime(18)); // Output: Is 18 prime? false

// Fibonaccisequence
function generateFibonacci(n) {
  if (n <= 0) {
    return []; // No terms to generate
  }
  if (n === 1) {
    return [0]; // The first term is 0
  }

  const fibonacciSequence = [0, 1]; // Start with the first two terms

  for (let i = 2; i < n; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }

  return fibonacciSequence;
}

// Example usage:
console.log("Fibonacci sequence with 5 terms:", generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log("Fibonacci sequence with 10 terms:", generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
