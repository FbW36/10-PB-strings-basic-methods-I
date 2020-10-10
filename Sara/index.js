// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console. 🎧 🎧 🎧 
let walkInPark = 'I can walk in the park all day!' ;
console.log('walkInPark ==>', walkInPark.slice(18 , 22)) ; // park 

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable. 🖥 🖥 🖥 
let javaScript = 'JavaScript' ;
console.log('javaScript ==>', javaScript.slice(3 , 6)) ; // aSc

// 3. Check if the sentence "nice shoes" contains the letter l or n. 🛍 🛍 🛍
let shoes = 'nice shoes' ; 
console.log('shoes ==>', shoes.includes('l')) ; // false
console.log('shoes ==>', shoes.includes('n')) ; // true 

 // 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 🧜‍♀️ 🧜‍♀️ 🧜‍♀️ 
  let firstName = 'Sara' ;
  let lastName = ' Smedlund' ; 
  let city = 'Stockholm' ; 

  let person = 'My name is ' + firstName + lastName  + ' and I live in ' + city + '!' ;

  console.log('question 4 ==>', person) ; // My name is Sara Smedlund and I live in Stockholm!

  // with templateLiteral
  let strEs1 = `My name is ${firstName}${lastName} and I live in ${city}!` ;
  console.log('strEs1 ==>', strEs1) ; 
