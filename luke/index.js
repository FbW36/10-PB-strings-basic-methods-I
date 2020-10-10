// 1. Declare a variable with the value of "I can walk in the park all day!".Print the word "park" to the console.
let enthused = `I can walk in the park all day!`;
console.log(enthused.slice(18, 23));

// 2. Declare a variable with the value "JavaScript".Use string methods to print the the characters "aSc" from your declared variable.
let js = `JavaScript`;
console.log(js.slice(3, 6));

// 3. Check if the sentence "nice shoes" contains the letter l or n.
let compliment = `nice shoes`;
console.log(compliment.includes("l") || compliment.includes("n"));

// 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc.Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let firstName = "Luke";
let city = "Berlin";
let job = `programmer`;

console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}`);
