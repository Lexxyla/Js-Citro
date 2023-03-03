/* 
*
1. Mutating array methods modify the original array, while non-mutating array methods do not modify the original array but instead return a new array. 

Mutating array methods:

push() - adds one or more elements to the end of an array.
pop() - removes the last element from an array.
shift() - removes the first element from an array.
unshift() - adds one or more elements to the beginning of an array.
splice() - adds or removes elements from an array at a specified index.
Non-mutating array methods:

concat() - joins two or more arrays and returns a new array.
slice() - returns a new array that contains a portion of the original array.
filter() - creates a new array with all elements that pass a test implemented by the provided function.
map() - creates a new array with the results of calling a provided function on every element in the calling array.
reduce() - applies a function against an accumulator and each element in the array to reduce it to a single value. It returns a new value and does not modify the original array.
* 
*/

/*
2. 

let arr = ['C#', 'Javascript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
arr.push('Kotlin');

// Add 'Java' after 'Ruby'
arr.splice(3, 0, 'Java');

// Remove the first item in the array
arr.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
arr.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
arr.splice(arr.indexOf('PHP'), 1, 'Go', 'Rust');

console.log(arr);
// Output: ['Scala', 'Swift', 'C#', 'Javascript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

*/


/*
The value of fruit after calling the changeFruit() function will be ['apple', 'mango', 'orange'].

This is because the changeFruit() function takes an array as its argument and modifies the third element (index 2) to be "orange". Then, it returns the modified array.

When the changeFruit() function is called with the fruit array as an argument, it modifies the original array fruit by changing its third element to "orange". The modified array is then returned and since it is not assigned to any variable, the original fruit array is updated with the modified values.
*/


/*
function max(arr) {
  let maxValue = arr[0]; // initialize maxValue to the first element of the array

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) { // if the current element is greater than the maxValue, update maxValue
      maxValue = arr[i];
    }
  }

  return maxValue;
}
// The function max() first initializes the maxValue variable to the first element of the array. Then, it loops through the remaining elements of the array and checks if each element is greater than the maxValue. If it is, then maxValue is updated to the current element. Finally, the function returns the maxValue.
//You can call this function like this:
console.log(max([4, 5, 12, -2])); // Output: 10

*/

/*
function valTimesIndex(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }

  return result;
}
console.log(valTimesIndex([1, 2, 3])); // Output: [0, 2, 6]
console.log(valTimesIndex([5, 10, 15])); // Output: [0, 10, 30]
*/