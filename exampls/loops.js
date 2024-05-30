let students = ["John", "Jane", "Bob", "Alice", "Charlie"];

// 1. for loop
function displayNamesForLoop(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

console.log("Using for loop:");
displayNamesForLoop(students);

// 2. while loop
function displayNamesWhileLoop(names) {
  let i = 0;
  while (i < names.length) {
    console.log(names[i]);
    i++;
  }
}

console.log("\nUsing while loop:");
displayNamesWhileLoop(students);

// 3. do-while loop
function displayNamesDoWhileLoop(names) {
  let i = 0;
  do {
    console.log(names[i]);
    i++;
  } while (i < names.length);
}

console.log("\nUsing do-while loop:");
displayNamesDoWhileLoop(students);

// 4. for...in loop
function displayNamesForInLoop(names) {
  for (let index in names) {
    console.log(names[index]);
  }
}

console.log("\nUsing for...in loop:");
displayNamesForInLoop(students);

// 5. for...of loop
function displayNamesForOfLoop(names) {
  for (let name of names) {
    console.log(name);
  }
}

console.log("\nUsing for...of loop:");
displayNamesForOfLoop(students);
