/*
1. if
2. if else
3. if else if
4. Ternary Operator
5. swith case
6. while
7. do while
8. for
9. break
10. continue
11. Comma Operator
*/

//! 1. Javascript if condtion
let carOne = {
  name: "Alto",
  year: "2015",
  price: "250000",
};
let carTwo = {
  name: "Maruthi",
  year: "2017",
  price: "350000",
};
// Find the cheper car in above objects
function findCheaprCar(priceOne, priceTwo) {
  if (priceOne.price < priceTwo.price) {
    console.log(priceOne.name + " " + "is chepar car" + " " + priceOne.price);
  }
}
findCheaprCar(carOne, carTwo);

// Above same code in arrow functions
let findCheperCarArrowFunction = (priceOne, priceTwo) => {
  if (priceOne.price < priceTwo.price) {
    console.log(priceOne.name + " " + "is chepar car" + " " + priceOne.price);
  }
};
findCheperCarArrowFunction(carOne, carTwo);

//! 2. Javascript if else condition
let rajuAge = 30;

if (rajuAge <= 25) {
  console.log("Raju is young");
} else {
  console.log("Raju is old");
}

// Example : display students age one by one
let studentsDetails = [
  {
    name: "Manikanta",
    age: 31,
    location: "Vijaywada",
  },
  {
    name: "Abhi",
    age: "24",
    location: "Hyderbad",
  },
];

let displaystudentsDetails = (students) => {
  console.log(students);
  // for (let item in students) {
  //   console.log(students[item].name);
  // }
  for (i = 0; i < students.length; i++) {
    // console.log(students[i].age);
    if (students[i].age <= 25) {
      console.log("younger");
    } else {
      console.log("older");
    }
  }
};

displaystudentsDetails(studentsDetails);

// ! 3. Javacript if else if condition
/*
? Syntax:
if (Condition) {
Statement
}else if (Condition) {
Statement
}
*/
// Example : display the month name based on number
let displayMonth = (month, item) => {
  if (month === 1) {
    console.log("this is January Month");
  } else if (month === 2) {
    console.log("this is February Month");
  } else if (month === 3) {
    console.log("this is March Month");
  } else if (month === 4) {
    console.log("this is April Month");
  } else if (month === 5) {
    console.log("this is May Month");
  } else if (month === 6) {
    console.log("this is June Month");
  } else if (month === 7) {
    console.log("this is July Month");
  } else if (month === 8) {
    console.log("this is August Month");
  } else if (month === 9) {
    console.log("this is Sep Month");
  } else {
    console.log("Not any month");
  }
};
displayMonth(2, 1);

// ! 4. Javascript ternary Operator
//? Syntax: condition ? expressionIfTrue : expressionIfFalse;
// Keypoints: It’s a good practice to use the ternary operator when it makes the code easier to read. If the logic contains many if...else statements, you should avoid using the ternary operators.

// Example console if value is true
let paymentStatus = true;

if (paymentStatus) {
  console.log("payments status completed");
} else {
  console.log("payments status pending");
}
// ternary operator
paymentStatus
  ? console.log("payment status completed")
  : console.log("payment status pending");

// Mutlipe ternary operator
let speed = 60;
// greater than 120 - Fast Speed / greater than 80 - Medium speed
if (speed >= 120) {
  console.log("You are in fast speed");
} else if (speed >= 80) {
  console.log("You are in medium speed");
}
speed >= 120
  ? console.log("You are in fast speed")
  : speed >= 80
  ? console.log("You are in medium speed")
  : console.log("You are in Low speed");

// ! 5 Javascript Spread Operator
let colors = ["green", "yellow", "orange"];
