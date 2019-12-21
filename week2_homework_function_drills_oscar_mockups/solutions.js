// Verbal Questions
// 1. A parameter is the variable assigned in the declaration of a function while the argument is the data you want to pass into the method's parameters.
// 2. "Return" is a statement that outputs a value back to where it was called while a "console.log" is a statement that allows for value inspection in order to debug code.

// Palindrome
const checkPalindrome = (string) => {
   const reversedString = string.toLowerCase().split("").reverse().join("");
   if (reversedString === string.toLowerCase()) {
       return true;
   } else {
   return false;
   }
};
console.log(checkPalindrome("hello world"));
console.log(checkPalindrome("racecar"));

// Sum Array
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
};

console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

