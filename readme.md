                             .map in JS

The .map() method in JavaScript creates a new array with the results of calling a provided function on every element in the original array
 
In this example:

We have an array named numbers.

We initialized a variable using the const keyword, and named the variable numbers. 

const double declares a new constant named double, which will store the result of the .map() operation.

numbers.map() is calling the .map() method on the numbers array. 

((x) => x * 2) is an arrow function that takes a single parameter x (representing an element from the numbers array) and returns the value of x multiplied by 2.

The .map() method will call this arrow function once for each element in the numbers array, each time passing it the current element (x), and then it creates a new array from the results returned by the arrow function. 

console.log(double);

Console.log(double); prints the elements of the double array to the console.

The expected output of console.log(double); is:
[2, 4, 6, 8, 10]

Each element of the original numbers array has been multiplied by 2.

Big O evaluation:
(const numbers = [1, 2, 3, 4, 5];):

This line of code is just a declaration, so its time complexity is O(1).

(const double = numbers.map((x) => x * 2);):

The .map() method iterates through each element of the array once. The callback function (in this case, (x) => x * 2) is executed once for each element. 
 
The operation inside the callback function is a simple arithmetic operation, which is considered O(1).
Therefore, for n elements, you would have n O(1) operations, resulting in O(n) time complexity for the .map() operation.
Printing Output (console.log(double);):

In terms of time complexity, the .map() method, has a time complexity of O(n). 

Use Case:

Calculating Squared Values of an Array of Numbers
We can also use .map to square values in an array. 

Ex: You have an array of numbers representing measurements in a scientific experiment, and you need to square each measurement for analysis.

const measurements = [3, 7, 9, 5, 2];

// Use the .map() function to square each measurement
const squaredMeasurements = measurements.map(x => x * x);

console.log(squaredMeasurements);
// Expected output: [9, 49, 81, 25, 4]
In this case, the .map() function is used to square each number in the measurements array

Edge case: When you apply .map() to an empty array, the callback function will not execute because they're no elements to iterate over. The numbers array is empty.
The .map() function is used to double each element, but since there are no elements, the callback function is never invoked.
The result is another empty array.

Ex: Empty Array

const numbers = [];

const doubled = numbers.map(x => x * 2);

console.log(doubled);  // Expected output: []


Resources:

MDN Web docs array.map:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 

Chat GPT Big O evaluation, edge:
https://chat.openai.com/share/5ddbada6-d1e7-43ef-899b-160c20a3e70b 

  