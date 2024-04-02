/*
Introduction to arrays
Array creation and initialization
Accessing array elements
Modifying array elements
Array length property
Adding elements to an array
Removing elements from an array
Iterating through arrays
Array methods (e.g., push, pop, shift, unshift, splice)
Multidimensional arrays
Array destructuring
Array iteration methods (e.g., forEach, map, filter, reduce)
Searching and sorting arrays
Concatenating arrays
Slicing and joining arrays
Array manipulation techniques
Common array operations and patterns
Working with array-like objects
Immutable operations on arrays
Common pitfalls with arrays
Performance considerations with arrays
ES6 features related to arrays (e.g., spread syntax, rest parameters)
*/

// ! Creationg an array
const cars = ["Maruthi", "swift", "Tata punch"];
// ! Accessing array element
let car = cars[0];
// ! Changing array element
car[0] = "Innova";
// ! Converting array to string
const fruits = ["mango", "apple", "orange"];
const fruitsString = fruits.toString();
console.log(fruits);
console.log(fruitsString);
// ! Access full array
document.getElementById("data").innerHTML = cars;
// ! type of array
const person = {
  name: "John",
  age: 21,
};
const fullName = "Manikanta Medindi";
console.log("Arrays typeof" + " -> " + typeof cars);
console.log("objects typeof" + " -> " + typeof person);
console.log("string typeof" + " -> " + typeof fullName);
// ! Array properties & methods
// * length
console.log("array length" + " -> " + cars.length);
// * find the first array of element
console.log("first array of element" + " -> " + cars[0]);
// * find the last array of element
console.log("last array of element" + " -> " + cars[cars.length - 1]);
// ! looping array elements
// * for loo
let schoolNames = [
  "Maple Elementary School",
  "Oakridge High School",
  "Pinecrest Middle School",
  "Willowbrook Academy",
  "Sunset Elementary",
  "Greenwood Middle School",
  "Riverside High School",
  "Meadowbrook Elementary",
  "Hilltop Academy",
  "Valley View School",
];
// * Direct DOM Manipulation:
const getOutputElement = document.getElementById("schoolsNames");
for (let i = 0; i < schoolNames.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = schoolNames[i];
  getOutputElement.appendChild(liElement);
}

// * Generating HTML Content:
const schoolOutputElement = document.getElementById("displaySchoolNames");
// Hold the HTML content
let htmlConent = "";
for (let i = 0; i < schoolNames.length; i++) {
  // concatenate each scholl name to html content
  htmlConent += "<li>" + schoolNames[i] + "</li>";
}
schoolOutputElement.innerHTML = "<ul>" + htmlConent + "</ul>";
