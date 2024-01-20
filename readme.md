                    .map in JS, Dante Rodriguez 10.6 N&W

# Introduction

The .map() method in JavaScript creates a new array with the results of calling a provided function on every element in the original array

Syntax of .map:
const newArray = array.map(function(currentValue, index, arr), thisValue)
Parameters:
function(currentValue, index, arr): this is a function that produces an element of the new array, taking three arguments:

currentValue (required) - The current element being processed in the array.

index (optional) - The index of the current element being processed in the array.

arr (optional) - The array map was called upon.

thisValue (optional): A value to use as this when executing the callback function. If not provided, or if it's undefined, the global object will be used as this.

Return Value:
A new array with each element being the result of the callback function
 
# Algorithm description:

```js
const numbers = [1, 2, 3, 4, 5];
```
In this example, we have an array named numbers.
We initialized a variable using the const keyword, and named the variable numbers. 

```js
const double = numbers.map((x) => x * 2);
```
const double declares a new constant named double, which will store the result of the .map() operation.

numbers.map() is calling the .map() method on the numbers array. 

((x) => x * 2) is an arrow function that takes a single parameter x (representing an element from the numbers array) and returns the value of x multiplied by 2.

```js
Console.log(double); 
```
Prints the elements of the double array to the console.
The expected output of console.log(double); is:
[2, 4, 6, 8, 10] resulting in each element multiplied by 2


# Big O evaluation:

```js 
numbers.map((x) => x * 2);
```

The .map() method, has a time complexity of O(n) with n being the length of the numbers array. This means the time it takes to run this code grows linearly with the size of the input array.

The space complexity of this code is also O(n), This is because the amount of additional memory used by the program grows linearly with the input size, due to the new array being created.

# Use Case:

Calculating Squared Values of an Array of Numbers
We can also use .map to square values in an array. 

Ex: You have an array of numbers representing measurements in a scientific experiment, and you need to square each measurement for analysis.

```js
const measurements = [3, 7, 9, 5, 2];
```
// Use the .map() function to square each measurement
const squaredMeasurements = measurements.map(x => x * x);

console.log(squaredMeasurements);
// Expected output: [9, 49, 81, 25, 4]
In this case, the .map() function is used to square each number in the measurements array

# Edge case:
 When you apply .map() to an empty array, the callback function will not execute because they're no elements to iterate over. The numbers array is empty.
The .map() function is used to double each element, but since there are no elements, the callback function is never invoked.
The result is another empty array.

```js 
Ex: Empty Array

const numbers = [];

const doubled = numbers.map(x => x * 2);
 
console.log(doubled);  // Expected output: []
```

# Resources:

MDN Web docs array.map:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 

Chat GPT Big O evaluation, edge cases:
https://chat.openai.com/share/5ddbada6-d1e7-43ef-899b-160c20a3e70b 

  