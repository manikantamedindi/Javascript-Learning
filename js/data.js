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
            completed: false,
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
    ],
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
    },
  },
});
