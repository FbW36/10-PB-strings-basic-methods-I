//Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let sentence = "I can walk in the park all day!";
console.log("Printing word park => ", sentence.slice(18, 22));

//Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let sentence2 = "JavaScript";
console.log("Printing letters asc => ", sentence2.slice(3, 6));

//Check if the sentence "nice shoes" contains the letter l or n.
let sentence3 = "nice shoes";
console.log(
  "Is there any l or n in sentence3? => ",
  sentence3.includes("l", "n")
);

//Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let firstName = "cindy";
let city = "dusseldorf";
let role = "student";
console.log(
  `Hi! my name is ${firstName}. I live in ${city} and I am a ${role}.`
);
