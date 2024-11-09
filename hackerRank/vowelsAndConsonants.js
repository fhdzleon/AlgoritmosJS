/* 
Crear una función que reciba un string y devuelva el string en un formato diferente: Primero sus vocales en el orden que estan escritos
y despues sus consonantes . 

ej.  Input - "String con vocales"
    output - "iooaestrngcnvcls" 
*/

const vowelsAndConsonants = (s) => {
  const vowels = [];
  const consonants = [];
  const isVocal = /^[aeiouAEIOU]+$/;

  for (let i = 0; i < s.length; i++) {
    if (isVocal.test(s[i])) {
      vowels.push(s[i]);
    } else {
      consonants.push(s[i]);
    }
  }
  const result = vowels.join("").concat(consonants.join(""));

  console.log(result);
  return result;
};

vowelsAndConsonants("javascriptloops");
