// Numbers 
// var num = 5;

// num = 3.5;
// console.log(num + 2) //5.5

// var num = 2 + 1.33333333333;

// console.log(num.toFixed(3));   //3.33  <- string

// Math Object     3.3333
// Math.ceil       4
// Math.trunc      3
// Math.floor      3

// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.9));
// console.log(Math.trunc(2.5));

// console.log(Math.trunc(9 / 2));

// Strings 
// let  a = '5.6';
// let b = '6';
// console.log(a + b); // '56'

// const text1 = ' John Said "He will go to the beach" ';
// const text2 = " John Said \"He will go to the beach\" ";
// const text3 = "I said I can't do this";
// const text4 = 'I said I can\'t do this';  
// const text5 = `This is a string`;

// Convert strings to numbers;

// a = Number(a);
// b = +b;
// a = parseFloat(a);
// b = parseFloat(b);
// console.log(a + b);
// const c = 'Hello world'
// console.log(Number(c));  //NaN

// Convert number to string
// const num1 = 10;
// console.log(num1.toString() + ' My lucky number');
// console.log(String(num1) + ' My Lucky number');

// console.log(num1.toString(16) + ' In Hex');  // Hex base 16
// console.log(num1.toString(2) + ' In Binary'); // Binary base 2

// const num1 = '5';
// const num2 = 9;
// console.log(num1 + num2); //'59'  string + number = string;
// console.log(num2 + num1); // '59'    number + string = string

// const num1 = 85;
// const num2 = 45;
// console.log(num1 > num2);  //true
// console.log(num1 == num2); //false
// console.log(num1 < num2);  //false;

// Falsy value  '' undefined null false, 0

// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(false));

// // truthy value 9 or 'Hello world' or true
// console.log(Boolean(3 + 5));
// console.log(Boolean(3 - 5));
// console.log(Boolean('Hello world'));
// console.log(Boolean(true));
// console.log(Boolean(3 - 3));

// typeof operator 
let a = 'Hello world!';
let b = 35;
let c = 'true';
console.log(typeof a);   //string 
console.log(typeof (a));   //string

console.log(typeof (b));
console.log(typeof c);  //string
console.log(typeof Boolean(c)); //boolean

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN); //type number



