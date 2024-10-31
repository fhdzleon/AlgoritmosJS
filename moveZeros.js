/* 
Write an algorithm that takes an array and moves all of the zeros to the end,
 preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

 */

const moveZeros = (arr) => {
  let noZeros = arr.filter((i) => i !== 0);
  const zeros = arr.filter((j) => j === 0);

  noZeros = [...noZeros, ...zeros];

  return noZeros;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
