// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a name.
// We create a conditional statment with two types of statements - and 'if' and an 'else' statement.
// The conditional statement contains an 'if' statement where the name variable is equal to 'Mary'.
// The second half of the conditional includes an 'else' statement where the name variable is anything other than 'Mary'.
// We console.log 'How do you do?' instead of 'Hi, Mary!' becuase Dane is not equal to Mary. 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE CONDITIONALS CONCEPTUAL 
// We make a variable called secret.
// We make another variable called code and set it as 123 as a code.
// We create two 'if' conditional statements.
// The first 'if' statement has the code variable equaling 123.
// In the case of code equaling 123, the secret variable will equal 'super' and the code variable will equal the code multiplied by 2. 
// The second 'if' statement has a code variable greater than 250.
// In the case of the code being greater than 250, the secret variable will equal 'duper'.
// If we console.log(secret), we print 'super' because the code variable equals 123.
// The code is then multiplied times two which makes the code equal to 246 which is less than 250 so the console.log will still remain 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set it to true as a boolean.
// We make a variable called age and set it as 34 as an age. 
// We make a variable called zip and set it as 55407 as a zip code.
// We create a conditional statement with an 'if', 'else if', 'else if', and 'else statment'.
// The 'if' statement contains the condition that if the isStudent variable is equal to true 
    //AND the zip variable is greater than 80000, then the console.log will print, 'You're a student on the West Coast!'.
// The first 'else if' statement contains the condition that if the isStudent variable is equal to false 
    //OR the age variable is less than 30, then the console.log will print, 'What are your hobbies?'.
// The second 'else if' statement contains the condition that if the isStudent variable is equal to true
    // (and no other condition is added), then the console.log will print, 'Welcome to Prime!'.
// The 'else' statement implies that if there is a combination of set variables that does 
    // NOT fit in with the other conditions, then the console.log will print, 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - let colorOne = 'blue';
// Should be blue, not red.
let colorOne = 'red';
// FIX - let colorTwo = 'red';
// Should be red, not blue.
let colorTwo = 'blue';
let mix = true;

// 
if (mix === true) {
  colorOne = 'purple';
// FIX - colorTwo ='purple';
// Should have colorTwo set as purple as well as colorOne.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

