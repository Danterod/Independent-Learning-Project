
const numbers = [1, 2, 3, 4, 5];
// Initialize an array named numbers eith elements 1-5.

// Pass a function to map. 
// const double declares a new constant named double, which will store the result of the .map() operation.
//numbers.map() is calling the .map() method on the numbers array. 
const double = numbers.map((x) => x * 2);
// The arrow function takes parameter x (x is an element from the numbers array) and returns the value of x multiplied by 2.
console.log(double); 
// Expected output: Array [2, 4, 6, 8, 10]

  