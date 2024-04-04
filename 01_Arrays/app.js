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
// * for loop
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

const teluguMovieHeroes = [
  "Mahesh Babu",
  "Allu Arjun",
  "Prabhas",
  "Jr. NTR",
  "Ram Charan",
  "Nani",
  "Vijay Deverakonda",
  "Pawan Kalyan",
  "Naga Chaitanya",
  "Ravi Teja",
];

// Task 1: Display hero names using direct DOM manipulation with a for loop
const outputDisplayHeroNames = document.getElementById("displayHeroNames");
const ulElement = document.createElement("ul");
for (let i = 0; i < teluguMovieHeroes.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = teluguMovieHeroes[i];
  ulElement.appendChild(liElement);
}
outputDisplayHeroNames.appendChild(ulElement);

// Task 2: Display hero names using forEach method
const outputDisplayHeroNames2 = document.getElementById("displayHeroNames2");
const ulElement2 = document.createElement("ul");
teluguMovieHeroes.forEach((hero) => {
  const liElement = document.createElement("li");
  liElement.textContent = hero;
  ulElement2.appendChild(liElement);
});
outputDisplayHeroNames2.appendChild(ulElement2);

/* --> for loop
1. The for loop requires you to specify the initialization, condition, and increment/decrement steps explicitly.
2. It is more flexible and can be used for iterating over arrays, strings, or any iterable objects.
3. Allows you to break or continue the loop based on certain conditions.
Commonly used when you need more control over the iteration process, such as iterating over a subset of array elements or iterating in reverse.
*/

/* --> for each
1. The forEach method is a higher-order function available on arrays.
2. It takes a callback function as an argument and executes that function once for each element in the array.
3. It automatically handles the iteration process, so you don't need to specify initialization, condition, or increment/decrement steps.
4. Does not support breaking or continuing the loop. It always iterates over all elements in the array.
Commonly used for simple iterations where you just need to perform a task on each element of the array.
*/

/* --> Summary
In summary, the for loop provides more control and flexibility over the iteration process, while the forEach method offers a simpler and more concise way to iterate over array elements. The choice between them depends on your specific requirements and coding style.
*/
