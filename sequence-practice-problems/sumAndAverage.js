//Generating 5 random 2 digit numbers
let num1 = Math.floor(Math.random() * 90) + 9;
let num2 = Math.floor(Math.random() * 90) + 9;
let num3 = Math.floor(Math.random() * 90) + 9;
let num4 = Math.floor(Math.random() * 90) + 9;
let num5 = Math.floor(Math.random() * 90) + 9;
let sum = num1 + num2 + num3 + num4 + num5;
let average = sum / 5;
console.log("sum is: " + sum);
console.log("Average is: " + average)
