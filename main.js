// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

for (let i = 1; i < 6; i++) {
  calcExp = (x) => console.log(x ** i);
  calcExp(3);
}

for (let i = 1; i < 9; i++) {
  calcExp = (x) => console.log(x ** i);
  calcExp(2);
}

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

function printFavoriteFruit(favoriteFruit) {
  console.log(`My favorite fruit is: ${favoriteFruit}`);
}

favoriteFruit = "Peaches!";

printFavoriteFruit(favoriteFruit);

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

exponent = (x, i) => {
  let result = x ** i;
  // console.log(result);
};

exponent(3, 2);
console.log(result);

// Variables defined inside a function (local) are not accessible or visible from outside the function.
