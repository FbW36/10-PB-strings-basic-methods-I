//1
let walk = "I can walk in the park all day!";
console.log(walk.slice(18, 22));

// 2
let value = "JavaScript";
console.log(value.slice(3, 6));

// 3
let sentence = "nice schoes";
console.log(
  'the sentence "nice shoes" contains the letter l ==> ',
  sentence.includes("l")
);
console.log(
  'the sentence "nice shoes" contains the letter n ==>',
  sentence.includes("n")
);

// 4
let firstName = "Joyce";
let city = "Düsseldorf";
let hobby = "cooking";
let me = `My name is ${firstName}. I live in ${city} and I like ${hobby}.`;
console.log(me);
