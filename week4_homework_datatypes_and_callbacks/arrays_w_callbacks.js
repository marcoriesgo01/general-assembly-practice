// Section 3 Array Methods with Callbacks:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = ['The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

//Every:
//1. 
const isGreaterThanOrEqual = (currentValue) => currentValue >= 0;
console.log(nums.every(isGreaterThanOrEqual));
//2. 
const wordLength = (word) => word.length < 8;
console.log(panagrams.every(wordLength));

//Filter:
//1.
const lessThanFour = (currentValue) =>  currentValue  < 4;
console.log(nums.every(lessThanFour));
//2.
const evenWords = (word) => word.length % 2 === 0;
console.log(panagrams.filter(evenWords));

//Find:
//1.
const firstNum = (currentValue) => currentValue % 5 === 0;
console.log(nums.find(firstNum));
//2.
const longerThanThree = (word) => word.length > 3;
console.log(panagrams.find(longerThanThree));

//Find Index:
//1.
const numIndexThree = (currentValue) => currentValue % 3 === 0;
console.log(nums.findIndex(numIndexThree));
//2.
const lessThanOneWord = (word) => word.length < 2;
console.log(panagrams.findIndex(lessThanOneWord));

//For Each:
//1.
const allValuesMultiplied = (num) => console.log(num * 3);
console.log(nums.forEach(allValuesMultiplied));
//2.
const exclaimWords = (word) => console.log(word + "!");
console.log(panagrams.forEach(exclaimWords));

//Map:
//1.
const multipledByHundredArray = nums.map(num => num * 100);
console.log(multipledByHundredArray);
//2.
const wordsToUppercase = panagrams.map(word => word.toUpperCase())
console.log(wordsToUppercase);

//Some:
//1.
const divisibleSevenNumbers = num => num % 7 === 0;
console.log(nums.some(divisibleSevenNumbers));
//2.
const haveTheLetterA = word => word.match("a");
console.log(panagrams.some(haveTheLetterA));

