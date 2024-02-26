//! if statement
let personAge = 27;
if (personAge < 25) {
  console.log("Boy");
} else {
  console.log("Men");
}
personAge < 25 ? console.log("Boy") : console.log("Men");

//! Nested if statement
if (personAge < 25) {
  console.log("boy");
  if (personAge <= 27) {
    console.log("grownup to 27");
  } else {
    console.log("Men");
  }
} else {
  console.log("Men");
}
personAge < 25
  ? console.log("boy")
  : personAge <= 27
  ? console.log("Growingup to 27")
  : console.log("Men");

//! else statement
let studentAge = 20;
if (studentAge < 18) {
  console.log("He is not eligible for driving license");
} else {
  console.log("He is eligible for driving license");
}

//! if else if statement
let weight = 70; // kg
let height = 1.2; // meter
let bmi = weight / (height * height);
let weightstatus;

if (bmi < 18.5) {
  weightstatus = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightstatus = "Healthy Weight";
} else if (bmi >= 25 && bmi <= 29.9) {
  weightstatus = "Overweight";
} else {
  weightstatus = "Obesity";
}
console.log(weightstatus);
bmi < 18.5
  ? (weightstatus = "Underweight")
  : bmi > 18.5 && bmi <= 24.9
  ? (weightstatus = "Healthy Weight")
  : bmi >= 25 && bmi <= 29.9
  ? (weightstatus = "Overweight")
  : (weightstatus = "Obesity");

console.log(weightstatus);

//! Ternary  Operator ?
let age = 18;

if (age >= 16) {
  console.log("You can drive");
} else {
  console.log("You can't drive");
}

age >= 16 ? console.log("Your can Drive") : console.log("you can't drive");

//! spread Operator ?

let colors = ["#000000", "#000000", "#000000", "#000000", "#000000"];
let rgb = [...colors];
console.log(rgb);

let studentDetails = {
  name: "Manikanta",
  age: "12",
  location: "Vijayawada",
};
let parentDetails = {
  ...studentDetails,
};
console.log(parentDetails);

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
