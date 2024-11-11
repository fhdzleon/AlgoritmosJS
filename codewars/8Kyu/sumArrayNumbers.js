/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.


*/

const sumMix = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      total += arr[i];
    } else {
      return "El array contiene elementos no numericos";
    }
  }
  return total;
};

console.log(sumMix([3, 3, 3]));
console.log(sumMix([3, 3, 3, 12, 43, 2, 43]));
console.log(sumMix([3, "tres", 3]));
