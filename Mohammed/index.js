
// 1.
let str1 = "I can walk in the park all day!";
subStr1 = str1.slice(18, 22);
console.log(subStr1);

// 2.
let str2 = 'JavaScript';
let subStr2 = 'aSc';
let subStr2Exist = str2.includes(subStr2);
let subStr2Check = subStr2Exist ? "aSc" : "Not exist";
console.log(subStr2Check);

// 3.
let str3 = "nice shoes";
let checkLorN = (str3.indexOf('l') || str3.indexOf('n')) ? "l or n ==> exist" : "l or n ==> not exist";
console.log(checkLorN);

// 4.
let fName = 'Mohammed';
let lName = 'Al Mashraee';
let city = 'Berlin';

console.log(`Hi my name is ${fName} ${lName} I am currently a student at DCI and based in ${city}.` );