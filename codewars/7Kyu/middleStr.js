/* 
You are going to be given a non-empty string. Your job is to return the middle character(s) 
of the string.

    If the string's length is odd, return the middle character.
    If the string's length is even, return the middle 2 characters.

Examples:

"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"


*/

//* El metodo slice recibe 2 parametros el indice de inicio y el indice de fin
//* test = tamaño = 4    entra en la primer condicion el primer indice es: 4 / 2 - 1 = 1
//*                                                   el segundo indice es: 4 / 2 +1 = 3
//* Y con substr solo pasas el indice de inicio y la cantidad de elementos a substraer.

const getMiddle = (s) => {
  let size = s.length;

  return size % 2 === 0
    ? s.substr(size / 2 - 1, 2)
    : s.substr(Math.floor(size / 2), 1);
  /*  ? s.slice(size / 2 - 1, size / 2 + 1)
    : s.slice(Math.floor(size / 2), Math.floor(size / 2) + 1); */
};

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
