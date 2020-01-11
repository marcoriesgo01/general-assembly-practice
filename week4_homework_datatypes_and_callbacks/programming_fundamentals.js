// Section 1: Programming Fundamentals:
/*
1.
DRY - This abbreviation of "don't repeat yourself" stands encourages programmers to avoid the repetition of code in theeir programs so that it is concisee and eeasy to read.
KISS - This abbreviation of "keep it simple, stupid" encourages programmers to aim for simplicity in their code, making it easier to debug, write, and modify. 
Avoid creating a YAGNI - This concept, which stands for "you aren't gonna need it", discourages programmers from adding functionality until it is needed, avoiding premature complexity.
Do the simplest thing that could possibly work - This principle makes programmers write simple and concise programs by using the easist solution to problems.
Don't make me think - This principl encourages programmers to write code that can be read and understood easily, becaus if not, th code should be modified.
Write code for the maintainer - This principle makes programmers writte code that will easily mainttained after you forrget about it or by somebody who did not write it, making it easier to work properly in the future.
Single responsibility principle - This principle encourags developers to write components that only perform a single, well-defined task, making it easy to debug.
Avoid premature optimization - This principle discourages developers from optimizing code unless it is alrady working and very necessary for optimal efficiency.
Separation of concerns - This pinciple encourages developers to write different functionalities using distinct modules that do not overlap.

2.
Although non of these principles particularly surprise me, YAGNi is rather surprising but understandable because when starting a product, it is hard to not get ahead of yourself 
and wanting to write all functionality at once, instead of taking it slow and one functionality at a time.

3.
The principle that is currently giving the most struggle would be the "single responsibility principle", because when I am writing a program, I get lost with what components and modules affect 
other spcific parts of the code simply because I was not carreful enough when writing it at first, such as when naming and classifying different datatypes.
*/

// Commenting Code:

//Define a function "f" that takes in a parameter "l", which stands forr "limit".
const f = l => {
    //Create a variable "es", which stands for "evenSum" with an original value of 0; a variable called p, which stands for "previous", with an original value of "0"; another variable "c", which stands forr "current", with an original value of 1; and a variable "n", which stands for "next", with an original valuee of 0.
    let es = 0, p = 0, c = 1, n = 0
    //Begin a while loop that runs as long as the value of "c" is less than or equal to the value of the function parameter of "l".
    while (c <= l) {
      //Inside the while loop, with each repetition, redefine the value of "n" to equal the addition of the values of "c" and "p".
      n = c + p;
      //Now, write two equaling arrays, one containing "c" and "p", and the other "n" and "c" respectively, so that the value of "c" is redefined to that of "n", and the value of "p" is redefined to that of "c". 
      [c, p] = [n, c]
      //Then, using a ternary operator, redefine the value of "es" by using the value of "c" only if the valu of "c" is divisible by 2 with no remainder.  
      es += (c % 2 === 0) ? c : 0
    }
    //Now return the new value of variable "es", or "evenSum".
    return es
  }
  //Log to the console the value of function "f" when taking in an "l", or "limit", paramter with a value of 55.
  console.log(f(55))


// Define a function "f2" with a parameter called "limit".
  const f2 = (limit) => {
    //Create a variable "evenSum" that begins with a value of 0.
    let evenSum = 0;
    //Create another variable "previous" that also has an original value of 0.
    let previous = 0;
    //Create another variable "current" that has an original value of 1.
    let current = 1;
    //Begin a while loop that runs as long as the value of the variable "current" is less than or equal to the value of the function parameter of "limit".
    while (current <= limit) {
      //Inside the while loop, define a variable "next" that is equal to the value of "current" added to the value of "previous".
      let next = current + previous;
      //With each repetition of the loop, redefine the value of "previous" to equal the value of "current".
      previous = current;
      //Also with eeadch repetition of the loop, redefine the value of "current" to equal the value of "next".
      current = next;
      //Write an if loop that checks whether the new value of "current" is divisible by 2 with no remainder.
      if (current % 2 === 0) {
        //If the "if" statement is true, add the valuee of "current" to the value of "evenSum".
        evenSum += current;
      }
    }
    //Now return the value of "evenSum".
    return evenSum;
  }
  //Log to the console the value of function "f2" when taking in a "limit" paramter with a valu of 55.
  console.log(f2(55))

  //Answer with comments:
  /*
  1.
  In keeping with the principle of "write code for the maintainer", a more semantic name forr this function could have been something along the lines of "evenFibonacci". Additionally, I think it would have been helpful to write 
  "Num" after the variable names "previous", "current", and "next" in order for it to be clearer that we are talking about numbers in the sequence.
  
  2.
  If I was starting a new job and my project was to expand the functionality of th program to returrn even or odd numbers, I would much rather have started with the second, code "f2"
  because it is much clearer since the very beginning of the block. 

  3. 
  Yes, the semi-colon in line 4 of the shorter code style is necessary for the code to run.
  */

  
