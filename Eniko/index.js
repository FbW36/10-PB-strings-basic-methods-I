// NB: declare each variable with a unique name so that you can run the exercises below in a single script without SyntaxErrors. If you are not sure what we mean by that, try first running your script with multiple variables of the same name and see what happens. We'll wait.


// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let var1 = "I can walk in the park all day!";
console.log(var1.slice(18, 22));

// Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let var2 = "JavaScript";
console.log(var2.slice(3, 6));

// Check if the sentence "nice shoes" contains the letter l or n.
let var3 = "nice shoes";
console.log("Does nice shoes include l? " + var3.includes("l"));
console.log("Does nice shoes include n? " + var3.includes("n"));

// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let name = "Eniko"
let activity = "make"
let favFood = "nachos"
let str = `Hello my name is ${name}. I will ${activity} some ${favFood} for dinner tongiht.` ;
console.log(str);