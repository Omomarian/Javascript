//reverse given string
function reverseString(str) {
  // Step 1: Convert the string into an array of characters
  let charArray = str.split("");

  // Step 2: Reverse the array
  charArray.reverse();

  // Step 3: Join the array back into a string
  let reversedStr = charArray.join("");

  return reversedStr;
}

// Test cases
console.log(reverseString("hello")); // ➞ "olleh"
console.log(reverseString("world")); // ➞ "dlrow"
console.log(reverseString("JavaScript")); // ➞ "tpircSavaJ"
console.log(reverseString("!gnirts esrever")); // ➞ "reverse string!"


//number of character in a string
function countCharacters(str) {
  return str.length;
}

// Test cases
console.log(countCharacters("hello")); // ➞ 5
console.log(countCharacters("world")); // ➞ 5


//capitalizes first letter of each word
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

// Test cases
console.log(capitalizeWords("hello world")); // ➞ "Hello World"
console.log(capitalizeWords("this is a test")); // ➞ "This Is A Test"
console.log(capitalizeWords("javaScript is fun")); // ➞ "Javascript Is Fun"





