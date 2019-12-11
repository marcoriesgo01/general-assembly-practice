//Section 1
/*
1. The acronym DRY stands for "Don't Repeat Yourself". It is important to pay attention to it because it reduces the amount that 
of repetition in the code, making it more readable and scalable. We have learned to use commenting and how to use functions and variables
that will be easy to read. We have also learned about pseudocode, which allows us to plan out the code we afre going to write in order to
prevent repetition.
2. Var, const, and let are variable declarations that assign value. Var can be re-declared and updated, let can be re-updated but not 
re-declared, and const cannot be updated or re-declared. Also, let and const are block scoped while var can be globally scoped or function/locally 
scoped.
*/

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
a < b
c > d
'Name' === 'Name'
a < b < c
a <= a < d
e != 'Kevin'
48 == '48'
f != e
/*
Set a new variable g to 0
console.log g
Then set the variable g to be equal to b + c
console.log g
*/
var g = 0
console.log(g)
var g = b + c
console.log(g)
/*I chose var because it is the most flexible one and it can be updated and re-declared, which was 
the action I wanted.
When I do not use const, let or var I do not get an error in the console. 
When I write 10 = g, I get the following error: "Uncaught SyntaxError: Invalid left-hand side in assignment"
*/

//Section 3
/*
Infinite loop 1 is an infinite loop because it does not have a changing consition after the console.log so the
condition will always be true and it will print it continuously.

Infinite loop 2 is not an infinite loop because after one console.log, the value of runProgram will no longer be
true and it will no longer print the statement.
*/
let letters = "A";
let i = 0;

// start a while loop that will run as long as i is less than 20.
while (i < 20) {
    // concatenates another "A" to the variable letters.
    letters += "A";
    // adds 1 to the variable i
	i++;
}
// logs the letters variable in the console, resulting in 20 A's.
console.log(letters);
//The code result in the code was what I was expecting.


//Section 4
/*
A for loop does the same thing as a while loop. However, all of the "baggage" and the external things that the loop uses are included inside of the loop syntax,
preventing infinite loops and errors. In while loops, the variables are declared outside of the loop, but not in for loops.

The first part of the control panel is: the initial condition.
The second part of the control panel is: the while condition.
The third part of the control panel is: the repeating expression.
*/
//Ascending count loop:
for (var i = 0; i <= 999; i++) {
    console.log(i); 
  }
//Reverse count loop:
for (var i = 999; i >= 0; i--) {
    console.log(i); 
  }
//Loop with string concatenation:
for (var i = 1; i <= 10; i++) {
    console.log("The value of i is: " + i); 
  }

//Iteration:
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
//Starwars array
for (let i = 0; i < StarWars.length; i = i + 1){
    console.log(StarWars[i]);
  }
//StarWars array plus the value of i
for (let i = 0; i < StarWars.length; i = i + 1){
    console.log(StarWars[i] + " " + i);
  }
//Iteration Bonus Challenge:
for (let i = 0; i < StarWars.length; i = i + 2){
    console.log(StarWars[i]);
  }