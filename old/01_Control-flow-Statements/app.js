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
