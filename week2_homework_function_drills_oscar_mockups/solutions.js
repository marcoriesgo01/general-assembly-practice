// Verbal Questions
// 1. A parameter is the variable assigned in the declaration of a function while the argument is the data you want to pass into the method's parameters.
// 2. "Return" is a statement that outputs a value back to where it was called while a "console.log" is a statement that allows for value inspection in order to debug code.

// Palindrome
const checkPalindrome = (string) => {
   const reversedString = string.toLowerCase().split("").reverse().join("");
   if (reversedString === string.toLowerCase()) {
       return true;
   } else {
   return false;
   }
};
console.log(checkPalindrome("hello world"));
console.log(checkPalindrome("racecar"));

// Sum Array
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
};

console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

// Prime Numbers
const checkPrime = (num) => {
    for(i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        };
    };
    return true;
};
console.log(checkPrime(10));

const printPrimes = (limitNum) => {
    for (let i = 0; i <= limitNum; i++) {
        if(checkPrime(i)) {
            console.log(i);
        };
    };
};
printPrimes(46);

// Rock Paper Scissors
const randomMove = () => {
    const moveArray = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * (moveArray.length));
    console.log(randomNumber);
    return moveArray[randomNumber];
}

let computerMove = randomMove();
let userMove = randomMove();

const rockPaperScissors = (computerMove, userMove) => {
    console.log("Computer chose " + computerMove);
    console.log("User chose " + userMove);
    if (computerMove === userMove) {
        console.log("It's a tie!");
    } else if(computerMove === "rock") {
        if(userMove === "paper") {
            console.log("paper beats rock, user wins");
        } else if(userMove === "scissors") {
            console.log("rock beats scissors, computer wins");
        };
    } else if(computerMove === "paper") {
        if(userMove === "rock") {
            console.log("paper beats rock, computer wins");
        } else if(userMove === "scissors") {
            console.log("scissors beat paper, user wins");
        };
    } else {
        if(userMove === "rock") {
            console.log("rock beats scissors, user wins");
        } else if(userMove === "paper") {
            console.log("scissors beat paper, computer wins")
        };
    };
};

rockPaperScissors(computerMove, userMove);

