// 1. print the word "park"
let str = "I can walk in the park all day!";
console.log("str ==>", str.slice(18, 23)); // park

// 2. print the characters "aSc"
let str2 = "JavaScript";
console.log("str2 ==>", str2.slice(3, 6)); // aSc

// 3. Check if the sentence "nice shoes" contains the letter l or n.

let str3 = "nice shoes";
console.log("str3 ==>", str3.includes("l" || "n"));

// 4. 3 different variables

let firstName = "Muhasin";
let profession = "student";
let city = "Düsseldorf";

let age = 28;

let result = `Hallow my name is ${firstName}. I live in ${city} and I am a ${profession} `;
console.log("result ==>", result);

/* let strEs6 = `Hallow my name is ${firstName}. I live in  ${city} and I am a ${profession}`;
console.log("strEs6 ==>", str2Es6);
 */
