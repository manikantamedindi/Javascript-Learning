// ! Primitive data types
// undefined
let studentName;
console.log(studentName); /* Result - undefined */
console.log(typeof studentName); /* Result - undefined */

// null
let doctorName = null;
console.log(doctorName); /* Result - null */
console.log(typeof doctorName); /* Result - object */

// number
let studentsCout = 400;
console.log(studentsCout); /* Result - 400 */
console.log(typeof studentsCout); /* Result - number */

// boolean
let isTaskCompleted = true;
let isTaskPending = false;
console.log(isTaskCompleted); /* Result - true */
console.log(typeof isTaskPending); /* Result - boolean */

// string
let collegeName = "SVIT";
console.log(collegeName); /* Result - SVIT */
console.log(typeof collegeName); /* Result - string */

// ! complex data types
// Object
let studentDetails = {
  name: "Rankup",
  age: 20,
  collegeName: "VVIT",
};
console.log(studentDetails.name); /* Result - Rankup */
console.log(typeof studentDetails); /* Result - Object */
