// a. 1 feet = 12 inch ,42 inch =?
console.log("42 inch = " + 42 / 12);

//b. reactangular plot 60 feet * 40 feet in meteres
let length = 60;
let breadth = 40;
let area = length * breadth; // this gives area in squarefeet
let areaInMeter = area / 10.764; //this  gives  area in sq.m
console.log("Area in square meter= " + areaInMeter.toFixed(2) + "sqm");

//c. calculate area of 25 plots in acres

let areaInAcres = areaInMeter / 4047.0;
let plots = 25;
areaOf25Plots = areaInAcres * plots;
console.log(
  "Area of 25 plots in  acres is " + areaOf25Plots.toFixed(2) + "acres"
);
