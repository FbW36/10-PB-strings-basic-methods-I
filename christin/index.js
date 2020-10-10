// 1 Declare a variable with the value of "I can walk in the park all day!".Print the word "park" to the console.

let park = "I can walk in the park all day!";

console.log("index of park", park.indexOf("park"));

console.log("Park==>", park.slice(18, 22)); // park

//2 Declare a variable with the value "JavaScript".Use string methods to print the the characters "aSc" from your declared variable.

let str = "javaScript";

console.log("print letter ==>", str.slice(3, 6)); // aSc

// 3 Check if the sentence "nice shoes" contains the letter l or n.

let shoes = "nice shoes";

console.log(shoes.includes("l") || shoes.includes("n")); // true 
/
 // Separate the OR requests



// 4 Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc.Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let name = "chrissi";
let hobby = "eat";
let food = "cake";

console.log(
  "sentence ==>",
  `I am ${name} and i love to ${hobby} , especially ${food}.`
);
