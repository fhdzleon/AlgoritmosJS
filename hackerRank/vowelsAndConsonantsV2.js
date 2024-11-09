/* 
Crear una función que reciba un string y devuelva el string en un formato diferente: Primero sus vocales en el orden que estan escritos
y despues sus consonantes . 

ej.  Input - "String con vocales"
    output - "iooaestrngcnvcls" 
*/

const vowelsAndConsonants = (s) => {
  const isVocal = /^[aeiouAEIOU]+$/;

  for (let i = 0; i < s.length; i++) {
    if (isVocal.test(s[i])) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!isVocal.test(s[i])) {
      console.log(s[i]);
    }
  }
};

vowelsAndConsonants("javascriptloops");
