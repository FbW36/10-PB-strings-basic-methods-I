// 1. Declare a variable with the value of "I can walk in the park all day!".Print the word "park" to the console.
let str1 = "I can walk in the park all day!";
console.log(str1.indexOf("p")); // 18
console.log(str1.lastIndexOf("k")); // 21
console.log(str1.slice(18, 22)); // park

// 2. Declare a variable with the value "JavaScript".Use string methods to print the the characters "aSc" from your declared variable.
let str2 = "JavaScript";
console.log(str2.slice(3, 6)); // aSC

// 3. Check if the sentence "nice shoes" contains the letter l or n.
let str3 = "nice shoes";
console.log(str3.includes("l")); // false
console.log(str3.includes("n")); // true
console.log(str3.includes("l", "n")); // false

// 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc.Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let name = "Laura";
let age = "72";
let species = "human";
let city = "Berlin";

let sentence = `My name is ${name}. I am a ${age} ${species} who lives in ${city}.`;
console.log(sentence); // My name is Laura.I am a 72 human who lives in Berlin.
