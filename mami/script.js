//1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let mylove = "I can walk in the park all day!";

console.log("no1", mylove.slice(18, 22));

//2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let program = "JavaScript";
console.log("no2", program.slice(3, 6));

//3. Check if the sentence "nice shoes" contains the letter l or n.
let niceShoes = "nice shoes";
console.log("no3", niceShoes.includes("l"));
console.log("no3", niceShoes.includes("n"));

//4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let myHobby = "surfing";
let myHobby2 = "snowboarding";
let myHobby3 = "traveling";
let myHobbysentence = `My hobbies are ${myHobby} and ${myHobby2} and ${myHobby3}`;
console.log("no4", myHobbysentence);
