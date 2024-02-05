const App = new Vue({
  el: "#app",
  data: {
    showMobileMenu: false,
    topics: [
      {
        id: 1,
        name: "Arrays",
        completed: false,
        list: [
          {
            name: "Length Property",
            completed: true,
          },
          {
            name: "push()",
            completed: true,
          },
          {
            name: "unShift()",
            completed: false,
          },
          {
            name: "pop()",
            completed: false,
          },
          {
            name: "shift()",
            completed: false,
          },
          {
            name: "splice()",
            completed: false,
          },
          {
            name: "slice()",
            completed: false,
          },
          {
            name: "indexOf()",
            completed: false,
          },
          {
            name: "includes()",
            completed: false,
          },
          {
            name: "find()",
            completed: false,
          },
          {
            name: "findIndex()",
            completed: false,
          },
          {
            name: "map()",
            completed: false,
          },
          {
            name: "filter()",
            completed: false,
          },
          {
            name: "reduce()",
            completed: false,
          },
          {
            name: "every()",
            completed: false,
          },
          {
            name: "some()",
            completed: false,
          },
          {
            name: "sort()",
            completed: false,
          },
          {
            name: "forEach()",
            completed: false,
          },
          {
            name: "contact()",
            completed: false,
          },
          {
            name: "of()",
            completed: false,
          },
          {
            name: "from()",
            completed: false,
          },
          {
            name: "flat()",
            completed: false,
          },
          {
            name: "flatMap()",
            completed: false,
          },
          {
            name: "join()",
            completed: false,
          },
          {
            name: "Destructuring",
            completed: false,
          },
          {
            name: "Spread Operator",
            completed: false,
          },
          {
            name: "at()",
            completed: false,
          },
          {
            name: "reverse()",
            completed: false,
          },
          {
            name: "toReverse()",
            completed: false,
          },
          {
            name: "Multidimensional Array",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        name: "Namaste Javascript",
        completed: false,
        list: [
          {
            name: "EP-01 | How JavaScript Works 🔥& Execution Context",
            completed: true,
          },
          {
            name: "EP-02 | How JavaScript Code is executed? ❤️& Call Stack",
            completed: false,
          },
          {
            name: "EP-03 | Hoisting in JavaScript 🔥(variables & functions)",
            completed: false,
          },
          {
            name: "EP-04 | How functions work in JS ❤️ & Variable Environment",
            completed: false,
          },
          {
            name: "EP-05 | SHORTEST JS Program 🔥window & this keyword",
            completed: false,
          },
          {
            name: "EP-06 | undefined vs not defined in JS",
            completed: false,
          },
          {
            name: "EP-07 | The Scope Chain, 🔥Scope & Lexical Environment",
            completed: false,
          },
          {
            name: "EP-08 | let & const in JS 🔥Temporal Dead Zone",
            completed: false,
          },
          {
            name: "EP-09 | BLOCK SCOPE & Shadowing in JS",
            completed: false,
          },
          {
            name: "EP-10 | Closures in JS",
            completed: false,
          },
          {
            name: "EP-11 | setTimeout + Closures Interview Question",
            completed: false,
          },
          {
            name: "EP-12 | CRAZY JS INTERVIEW 🤯ft. Closures",
            completed: false,
          },
          {
            name: "EP-13 | FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions",
            completed: false,
          },
          {
            name: "EP-14 | Callback Functions in JS ft. Event Listeners",
            completed: false,
          },
          {
            name: "EP-15 | Asynchronous JavaScript & EVENT LOOP from scratch",
            completed: false,
          },
          {
            name: "EP-16 | JS Engine EXPOSED 🔥 Google's V8 Architecture",
            completed: false,
          },
          {
            name: "EP-17 | TRUST ISSUES with setTimeout()",
            completed: false,
          },
          {
            name: "EP-18 | Higher-Order Functions ft. Functional Programming",
            completed: false,
          },
          {
            name: "EP-19 | map, filter & reduce",
            completed: false,
          },
          {
            name: "EP-01 | Callback Hell",
            completed: false,
          },
          {
            name: "EP-02 | Promises",
            completed: false,
          },
          {
            name: "EP-03 | Creating a Promise, Chaining & Error Handling",
            completed: false,
          },
          {
            name: "EP-04 | async await",
            completed: false,
          },
          {
            name: "EP-05 | Promise APIs + Interview Questions 🔥",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        name: "New ES6 syntax",
        completed: false,
        list: [
          {
            name: "let – declare block-scoped variables using the let keyword.",
            completed: false,
          },
          {
            name: "let vs. var – understand the differences between let and var.",
            completed: false,
          },
          {
            name: "const – define constants using the const keyword.",
            completed: false,
          },
          {
            name: "Default function parameters – learn how to set the default value for parameters of a function.",
            completed: false,
          },
          {
            name: "Rest parameter – introduce you to the rest parameter and how to use them effectively.",
            completed: false,
          },
          {
            name: "Spread operator – learn how to use the spread operator effectively.",
            completed: false,
          },
          {
            name: "Object literal syntax extensions – provide a new way to define object literal.",
            completed: false,
          },
          {
            name: "for…of – learn how to use the for...of loop to iterate over elements of an iterable object.",
            completed: false,
          },
          {
            name: "Octal and binary literals –  provide support for binary literals and change the way to represent octal literals.",
            completed: false,
          },
          {
            name: "Template literals – learn how to substitute variables in a string.",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        name: "Destructuring",
        completed: false,
        list: [
          {
            name: "Array Destructuring – show you how to assign elements of an array to variables.",
            completed: false,
          },
          {
            name: "Object Destructuring – learn how to assign properties of an object to variables.",
            completed: false,
          },
        ],
      },
      {
        id: 5,
        name: "ES6 Modules",
        completed: false,
        list: [
          {
            name: "ES6 modules – learn how to write modular JavaScript code.",
            completed: false,
          },
        ],
      },
      {
        id: 6,
        name: "ES6 Classes",
        completed: false,
        list: [
          {
            name: "Class – introduce you to the ES6 class syntax and how to declare a class.",
            completed: false,
          },
          {
            name: "Getters and Setters – define the getters and setters for a class using the get and set keywords.",
            completed: false,
          },
          {
            name: "Class Expression – learn an alternative way to define a new class using a class expression.",
            completed: false,
          },
          {
            name: "Static methods – guide you on how to define methods associated with a class, not instances of that class.",
            completed: false,
          },
          {
            name: "Static Properties – show you how to define static properties shared by all instances of a class.",
            completed: false,
          },
          {
            name: "Computed property – explain the computed property and its practical application.",
            completed: false,
          },
          {
            name: "Inheritance – show you how to extend a class using the extends and super keywords.",
            completed: false,
          },
          {
            name: "new.target – introduce you to the new.target metaproperty.",
            completed: false,
          },
        ],
      },
      {
        id: 6,
        name: "Arrow Functions",
        completed: false,
        list: [
          {
            name: "Arrow functions – introduce you to the arrow functions ( =>)",
            completed: false,
          },
          {
            name: "Arrow functions: when you should not use – learn when not to use the arrow functions.",
            completed: false,
          },
        ],
      },
      {
        id: 7,
        name: "Symbol",
        completed: false,
        list: [
          {
            name: "Symbol – introduce you to a new primitive type called symbol in ES6",
            completed: false,
          },
        ],
      },
      {
        id: 8,
        name: "Promises",
        completed: false,
        list: [
          {
            name: "Promises – learn about Javascript Promises, what they are, and how to use them effectively.",
            completed: false,
          },
          {
            name: "Promise chaining – show you how to execute multiple asynchronous operations in sequence.",
            completed: false,
          },
          {
            name: "Promise composition: Promise.all() & Promise.race() – learn how to compose a new promise out of several promises.",
            completed: false,
          },
          {
            name: "Promise error handling – guide you on how to handle errors in promises.",
            completed: false,
          },
        ],
      },
      {
        id: 9,
        name: "ES6 collections",
        completed: false,
        list: [
          {
            name: "Map – introduce you to the Map type that holds a collection of key-value pairs.",
            completed: false,
          },
          {
            name: "Set – learn how to use the Set type that holds a collection of unique values.",
            completed: false,
          },
        ],
      },
    ],
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
    },
  },
});
