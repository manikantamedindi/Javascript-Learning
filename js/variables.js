console.log("Variables Start From here");

// !Var
/*
1. scope - 'var' is function scope. meaning it is only available within the function where it declared.
2. Hosting  - Variables declared with 'var' are hosted to top of thier scope, which means you can use them before they are declared
3. Reassignment - 'var' allows redeclaration and reaasignment
*/

exampleVar();
function exampleVar() {
  if (true) {
    console.log(x);
    var x = 10;
    let y = 10;
    console.log(x);
    console.log(y);
  }
  console.log(x);
}

// ! let
/*
1. scope - 'let' is block scoped. meaning it is only available within the block(enblosed by curly braces) where it is declared.
2. Hosting - Variables declared with 'let' are hoisted to the top of their block but are not initialized. You cannot use them before the declaration.
3. Reassignment - 'let' allows reassignment but not redeclaration in the same scope.
*/

console.log("let example start here");
exampleLet();
function exampleLet() {
  if (true) {
    let x = 20;
    console.log(x);
  }
  // console.log(x);
}

// ! const
/*
1. Scope - Like 'let' , 'const' is block-scoped
2. Hosting - Variables declared with 'const' are hoisted to the top of their block but like 'let' are not initialized. You cannot use them before the declaration.
3. Reassignment - 'const' is used for constants; its value cannot be reassigned after declaration.
*/

exampleConst();
function exampleConst() {
  if (true) {
    const z = 20;
    console.log(x);
  }
}
