/*# 10-PB-strings-basic-methods-I
1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console. 
*/
var walk = "I can walk in the park all day!";
var let = walk.slice(17, 23);
console.log(let);
/*
2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.*/
var  jav = "JavaScript" 
var let = jav.slice(3, 6)
console.log(let);

/*3. Check if the sentence "nice shoes" contains the letter l or n. */
let temp = "nice shoes";
console.log ('temp ==>', temp.includes("l"));
console.log ('temp ==>', temp.includes("n"));

/*4. Create 3 different variables about yourself, using strings as values, i.e,
 let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the 
 variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".*/

 let firstname = "Aneudy";
 let city = "Berlin";
 let age = "40";
 console.log("My name is " + firstname + " and I live in " + city + ". And I am " + age + " years old." )