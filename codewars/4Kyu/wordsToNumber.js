const wordsToNumber = (words) => {
  const units = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
  };

  const tens = {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  const multiples = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  let result = 0;
  let current = 0;

  words.split(/[\s-]+/).forEach((word) => {
    if (units[word] !== undefined) {
      current += units[word];
    } else if (tens[word] !== undefined) {
      current += tens[word];
    } else if (multiples[word] !== undefined) {
      current *= multiples[word];
      if (word === "thousand" || word === "million") {
        result += current;
        current = 0;
      }
    }
  });

  return result + current;
};

console.log(wordsToNumber("eight"));
console.log(wordsToNumber("two-hundred"));
console.log(wordsToNumber("hundred-two"));
