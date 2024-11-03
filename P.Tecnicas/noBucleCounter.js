/* 
Crear un contador de numeros que imprima los numeros del 1 al 10 dentro de un array, sin utilizar 
bucles. 
*/

const counter = (num, init = 0, numbers = []) => {
  if (num <= init) {
    return;
  }

  init++;
  numbers.push(init);
  counter(num, init, numbers);
  return numbers;
};

console.log(counter(10));

console.log(counter(10, 12));
