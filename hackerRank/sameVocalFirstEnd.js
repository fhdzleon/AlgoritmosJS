/* 
    Construir una funcion que reciba un string o una oracion y verifique que el primer y ultimo caracter sean vocales y sean la misma vocal 
    de ser corrcto retorna true, en caso contrario retorna falso

    Ejemplos: 
        Input "Hola a todos"     output: false
        Input "Ahora nada"       output: true
*/

/* const regexVar = (s) => {
  const vocals = /^[aeiou]/;

  const allLeters = s.trim().toLowerCase();

  if (
    vocals.test(allLeters[0]) &&
    vocals.test(allLeters[allLeters.length - 1]) &&
    allLeters[0] === allLeters[allLeters.length - 1]
  ) {
    return true;
  }
  return false;
}; */

//? V 2.0

const regexVar = (s) => {
  const vocals = /^[aeiou]/;

  const first = s.trim().toLowerCase()[0];
  const last = s.trim().toLowerCase()[s.length - 1];

  return vocals.test(first) && vocals.test(last) && first === last;
};

console.log(regexVar("Hola a Todos"));
console.log(regexVar("Ahora ya no hay nada"));
