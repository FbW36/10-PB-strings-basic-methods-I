//1.
let sentence = "I can walk in the park all day!";
console.log(sentence.indexOf("park"));
console.log(sentence.lastIndexOf("k"));
console.log(sentence.slice(18, 22));

//2
let js = "JavaScript";
console.log(js.lastIndexOf("a"));
console.log(js.indexOf("c"));
console.log(js.slice(3, 6));

//3
let sentence2 = "nice shoes";
console.log(sentence2.includes("l") || sentence2.includes("n"));

//4
let firstName = "Ines";
let city = "Berlin";
let job = "Student";
console.log(`Hello I am ${firstName}, I live in ${city} and I am a ${job}`);
