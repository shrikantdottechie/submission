////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers

let num1 = 10;
let num2 = 20;

let largeNum = 0;
largeNum = num1 > num2 ? num1 : num2;
console.log(`The Largest of ${num1} & ${num2} is ${largeNum}`);

/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */
let score = 85;

if (score >= 90){
  console.log('A');
}else if(score >= 80){
  console.log('B');
}else if(score >= 70){
  console.log('C');
}else if(score >= 55){
  console.log('D');
}else {
  console.log('F');
}


//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"

let date1 = new Date();
let currTime = date1.getTime();
if (currTime >= '5 AM' && currTime < '11:59 AM'){
  console.log("Good Morning");
}else if (currTime >= '12 PM' && currTime < '16 PM'){
  console.log("Good Afternoon");
}else {
  console.log("Hey there");
}



////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let name1 = 'Sabrina';
console.log(`The specified letter in ${name1} is ${name1.charAt(4)}`);

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

const word1 = 'Teddy';

const index = 2;

console.log(`The character code ${word1.charCodeAt(index)} is equal to ${word1.charAt(index)}`);


// Using fromCharCode() - make it readable for us :). You'll see!
String.fromCharCode(65, 66, 67);

// Take your first and last name and concat()

console.log("Shrikant" + " " + "Shah");

// Create a string and make it return true using startsWith()
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));

// Now use any variable with endsWith() and return false

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));

// Finish the following sentence. Use includes() and return true.


const ozgur = 'Once upon a time Ozgur looked up at the Moon, ';
const word = 'Moon';
console.log(`The word "${word}" ${ozgur.includes(word) ? 'is' : 'is not'} in the sentence`);

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?


const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

const searchTerm = 'cow';
const indexOfFirst = joshHadALittleLambOopsCow.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);


////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke";
console.log(a < b);
console.log(c > b);
console.log(d === d);
console.log(d != a);
console.log(a < 15);
console.log(a < b < c);
console.log(c > b > a != d);


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
let room = 0;

for (room = 0; room < 10 ; room++){
  console.log(`Spinning Ken's room ${room} time(s)`);
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

let vision = 0;

for (vision = 0; vision < 20 ; vision++){
  console.log(`Spinning Teo's vision ${vision} time(s)`);
}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.

vision = 0;
while (vision < 20){
  console.log(`I'm sorry`);
  vision++;
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 



// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
    thing1: 'shoes',
    thing2: 'clothes',
    thing3: 'gaming console'
  };
  

for (const property in whateverQueenBeySaid) {
  console.log(`${property}: ${whateverQueenBeySaid[property]}`);
}


// Using (FOR IN LOOP), print the indexes of the array.
  const lana = ['l', 'a', 'n', 'a']

  for (const letter in lana) {
    console.log(`${lana[letter]}`);
  }
  
  // USE (FOR OF LOOP)!
  const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner'];
  

for (const element of tia) {
  console.log(element);
}


  
  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
  const perscholas = ['Amira', 'Arely', 'Jonathan']
  perscholas.forEach(element => {
    const prefix = "PS";
    console.log(`${prefix}${element}`)});

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];

shoppingList.push("a bottle of Hendricks gin");

shoppingList.forEach(element => {
  console.log(element);
});

//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
//console.log(yoda);
const reversed = yoda.reverse();
console.log('reversed:', reversed);


//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];

waitList.forEach(nowServing => console.log(nowServing));

//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

var shoe = ["just", "do", "it"];
let shoeString = ' ';
shoe.forEach(element => {
  (shoeString += element);
});

console.log(shoeString);

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
console.log(arr2);

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
let arr1 = [0, 1, 2];
const arr5 = [3, 4, 5];
let arr3;
arr3 = [...arr1, ...arr5];
console.log(arr3);

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
const maxOfTwoNumbers = (a, b) => a > b ? a : b;
console.log(maxOfTwoNumbers(25,30));


//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThreeNumbers = (a, b, c) => {
  if (a > b && a > c){
    return a;
  }else if (b > a && b > c){
    return b;
  }else {
    return c;
  }
};

console.log(`Max of 3 given numbers is ${maxOfThreeNumbers(25,30,50)}`);

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
const isCharacterAVowel = (str1) => {
  let result;
  result = (str1 === 'a' || str1 === 'e' || str1 ==='i' || str1 === 'o' || str1 === 'u') ? true : false;
  console.log(result);
};

console.log(isCharacterAVowel('o'));

//4. Write a function charCount that takes a string and returns the length of the string.
const charCount = ((str1) => {
  console.log(str1.length);
});
console.log(charCount("It is really nice experience"));

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.
// program to count the number of vowels in a string

function countVowel(str) { 

  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;

  // return number of vowels
  return count;
}

// take input
const string = "obvious";

if (string.length <= 10){
const result = countVowel(string);

console.log(result);
}