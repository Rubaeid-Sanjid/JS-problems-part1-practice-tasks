// Task-1:
function convertTemperature(celsius) {
  const Fahrenheit = celsius * (9 / 5) + 32;
  return Fahrenheit;
}
const Fahrenheit = convertTemperature(12);
console.log("Fahrenheit: " + Fahrenheit);

console.log(
  "=================================================================="
);

//Task-2:
function findNumber(numbers, findNumber) {
  let count = 0;
  for (const iterator of numbers) {
    if (iterator === findNumber) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const find = 5;

const output = findNumber(numbers, find);
console.log("Output: " + output);

console.log(
  "=================================================================="
);

//Task-3:
function countVowels(statement) {
  let count = 0;
  for (const iterator of statement) {
    if (
      iterator === "a" ||
      iterator === "e" ||
      iterator === "i" ||
      iterator === "o" ||
      iterator === "u"
    ) {
      count++;
    }
  }
  return count;
}
const statement = "Hello programmers.";
const vowels = countVowels(statement);
console.log("Total Vowels: " + vowels);

console.log(
  "=================================================================="
);

//Task-4:
function findLongestWord(statement) {
  let words = statement.split(" ");
  let wordSize = words[0].length;
  let longestWord;
  for (let i = 0; i < words.length; i++) {
    let long = words[i].length;
    if (long > wordSize) {
      wordSize = words[i].length;
      longestWord = words[i];
    }
  }
  return longestWord;
}
const sentence = "I am learning Programming to become a programmer";
const longestWord = findLongestWord(sentence);
console.log(longestWord);

console.log(
  "=================================================================="
);

// Task-5:
function randomNumberGenerator() {
  const randomNumber = Math.floor(Math.random() * 20) + 10;
  console.log(randomNumber);
}
randomNumberGenerator();

console.log(
  "=================================================================="
);
