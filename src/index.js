// utility-functions.js

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Function to generate a random integer within a specified range
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to check if a string is palindrome
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  // Exporting functions to make them available for external use
  module.exports = {
    capitalizeFirstLetter,
    isEven,
    randomInt,
    isPalindrome
  };
  // Importing the utility functions package
  const utils = require('utility-functions');
  
  // Example usage of the utility functions
  console.log(utils.capitalizeFirstLetter('hello')); // Output: Hello
  console.log(utils.isEven(5)); // Output: false
  console.log(utils.randomInt(1, 10)); // Output: Random integer between 1 and 10
  console.log(utils.isPalindrome('racecar')); // Output: true
  