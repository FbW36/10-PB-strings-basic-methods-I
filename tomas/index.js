// Print the word "park" to the console
let str1 = "I can walk in the park all day!";
console.log(str1.indexOf("p"));
console.log(str1.lastIndexOf("k"));
console.log("result 1 --> ", str1.slice(18, 22));

// Use string methods to print the the characters "aSc" from your declared variable
let str2 = "JavaScript";
console.log(str2.indexOf("c"));
console.log(str2.lastIndexOf("a"));
console.log("result 2 --> ", str2.slice(3, 6));

// Check if the sentence "nice shoes" contains the letter l or n
let str3 = "nice shoes";
console.log("result 3 -->", str3.includes('l') || str3.includes('n'))

// Print a sentence to the console using the variables and string interpolation
let firstName = "Tomas";
let city = "Berlin";
let occupation = "student";
console.log(
  `My name is ${firstName}. I live in ${city} and I am a ${occupation}.`
);
