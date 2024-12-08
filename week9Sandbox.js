//let and const are other ways to name a variable formerly...
var x = 10;
{
  let x = 2;
}
//expceted is 10. the let name is ignored bc of let.
var x = 10;
{
  x = 2;
}
//expceted is 2, i guess because the let feature is gone.
var x = 10;
{
  var x = 2;
}
//expceted is 2, bc the second one changed the first

//if we use CONST, the variables cant change
/*
const pi = 3.1789;
console.log(pi);

pi = 6; //but this is saying pi is osmething different
console.log(pi); // this log prints and error
*/

//Template Literals (see Romaric's git). This next method allows us to stack text without using \n for line breaks.
let myString = `Hola
mundo,
mi llamo
Rick.`;
console.log(myString);

let anotherString = "Hello\nworld\nmy name\nis Rick."; //this was the olde way to make the text stack (or add returns)
console.log(anotherString);

//Here's another example of a template (?) literal.
console.log(`Six times five = ${5 * 6}`); //we can wrap any js code in curly braces and adding a dollar sign.

//mas...Template literals are literals delimited with backtick (`) characters.  They are really useful, and allow multi-line strings, string interpolation with embedded expressions, and tagged templates.
let firstName = "Rickey";
let lastName = "Rat";
let street = "1 Main St.";
let city = "Disneyland";
let state = "CA";

console.log(
  `${firstName} ${lastName} lives at 
${street} 
                 ${city}, ${state}.`
);
//In JavaScript, this information could be printed using console.log() and string concatenation, but using console.log() and template literals provides a much easier way to do so.

//Arrow FUnctions aka Fat Arrows =>
const createFullName = (honorific, firstName, lastName) =>
  `${honorific} ${firstName} ${lastName}`;
console.log(createFullName("Today's", "Tom", "Sawyer"));

const someFunction = (a, b) => {
  let result = "";
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
};
console.log(someFunction("Hello ", 3));

function power(base, exponent) {
  //This example is shown in the next coe
  return base ** exponent;
}

//-------------------------------

const powerFunction = (base, exp) => {
  return base ** exp;
};
console.log(powerFunction(2, 2));
console.log(powerFunction(4, 2));
console.log(powerFunction(2, 4));
//-------------------------------

const powder = (base, exp) => {
  let result = 1;
  for (let count = 0; count < exp; count++) {
    result *= base;
  }
  return result;
};

console.log(powder(2, 10));
console.log(powder(4, 2));
console.log(powder(5, 7));

//------------------------------- Callbacks
//let username = sentHttpRequest("getUser");
//console.log(username);

//-------------------- Promises. An object that says do something if the call was sucessful
/* function handleEvent(value) {
  console.log(value);
}

function handleError(err) {
  console.error(err);
}
doSomethingThatReturnsAPromise().then(handleEvent).catch(handleError);
*/

const booleanFlag = false;
let trueOrFalse = new Promise((resolve, reject) => {
  if (booleanFlag) {
    resolve("The flag is true!");
  } else {
    reject("The flag is false!");
  }
});
// This will print out the promise that you've just declared
console.log(trueOrFalse);

trueOrFalse
  .then(function successValue(result) {
    console.log(result);
  })
  .then(function successValue2() {
    console.log("You can call multiple functions this way.");
  })
  .catch(function failureValue(reject) {
    console.log(reject);
  });
