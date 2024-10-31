/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 The first word within the output should be capitalized only if the original word was capitalized 
 (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

 Examples-->

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"


*/

const toCamelCase = (str) => {
  const strSeparate = str.split(/[-_]/);

  for (let i = 1; i < strSeparate.length; i++) {
    strSeparate[i] =
      strSeparate[i].charAt(0).toUpperCase() + strSeparate[i].slice(1);
  }
  const strCapitalized = strSeparate.join("");
  return strCapitalized;
};

console.log(toCamelCase("a_Cat-Is_evil"));
console.log(toCamelCase("the_pippi-Was_Savage"));
