// var - function scoped
var studentDetails = {
  name: "Kumar",
  age: "18",
  college: "VVIT",
};

// let - block scoped
let doctorDetails = [
  {
    name: "Dr Stephen",
    age: "28",
  },
  {
    name: "Dr Mark",
    age: "32",
  },
];

// const block scoped
const studentsCount = 42;

function hello() {
  if (true) {
    var a = "Javascript";
    let b = "Typescript ";
  }
  console.log(a);
  console.log(b);
}
hello();

/* Result
console.log(a); = Javascript
console.log(b); = Uncaught ReferenceError: b is not defined
*/
