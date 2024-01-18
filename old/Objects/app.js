// Object Structure

let studentDetails = {
  name: "yash",
  age: "17",
  college: "JNTU",
};
/* key:value */
console.log(studentDetails);

// new Javascript object creation with - new Object()
let carDetails = new Object();
carDetails.name = "Maruthi";
carDetails.model = "breezaa";
console.log(carDetails);

// JavaScript Objects are Mutable
const x = studentDetails;
console.log(x.age); /* age is 17 */
x.age = 20;
console.log(x.age); /* age is 20 */
