// exercise 1
var1 = "I can walk in the park all day!";
wordToSearch = "park";
wordIndex = var1.indexOf(wordToSearch); //18
wordLenght = wordToSearch.length;
wordEnd = wordIndex + wordLenght;
console.log(var1.slice(wordIndex, wordEnd));

// exercise 2
var2 = "javascript";
var_a_pos = var2.lastIndexOf("a");
var_a_str = var2.slice(var_a_pos, var_a_pos + 1);
var_s_pos = var_a_pos + 1;
var_s_str = var2.slice(var_s_pos, var_s_pos + 1);
var_S = var_s_str.toUpperCase();
var_c_pos = var_s_pos + 1;
var_c_str = var2.slice(var_c_pos, var_c_pos + 1);
console.log(var_a_str + var_S + var_c_str);

// exercise 3
var3 = "nice shoes";
console.log(var3 + "includes l? =", var3.includes("n"));
console.log(var3 + "includes n? =", var3.includes("n"));

// exercise 4
firstName = "Frank";
city = "Köln";
country = "Germany";
let sentence = `My name is ${firstName}. I live in ${city} and was born in ${country}`;
console.log(sentence);
