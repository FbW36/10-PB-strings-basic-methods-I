// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let walk = "I can walk in the park all day!";

console.log("walk ==>" + walk.slice(18, 22));

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let js = "JavaScript";

console.log("js ==>" + js.slice(3, 6));
// 3. Check if the sentence "nice shoes" contains the letter l or n.

let shoes = "nice shoes";
console.log(shoes.includes("l"), shoes.includes("n"));
// 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let firstName = "Azael";
let city = "Köln";
let job = "Developer";
let firma = "Mocosoft";
let aboutMe = `My name is ${firstName} and I live in ${city}. I study to be ${job} in a top firma like ${firma}`;

console.log("aboutMe ==>" + aboutMe);
