let colors = ["red", "green", "blue"];
console.log("Colors Length" + " " + colors.length);
// Colors Length 3
colors.length = 5;
console.log("Colors Length" + " " + colors);
// Colors Length red,green,blue,,
colors.length = 0;
console.log(colors);
// Empty

let sectionAStundets = ["mani", "Ravi", "Raju"];
let sectionBStudents = ["Ram", "Sai", "Kishore"];
// sectionAStundets.push(sectionBStudents);
console.log("Overall Students " + " " + sectionAStundets);
sectionAStundets.push(...sectionBStudents);
console.log("Overall Students " + " " + sectionAStundets);
// !Key Notes
/*
1. Starting from ES6, you can use the spread operator
*/
