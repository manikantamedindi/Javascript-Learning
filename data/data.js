const App = new Vue({
  el: "#app",
  data: {
    showMobileMenu: false,
    topics: [
      {
        id: 1,
        name: "Variables",
        complete: false,
        list: [
          {
            name: "var",
            complete: false,
          },
          {
            name: "let",
            complete: false,
          },
          {
            name: "const",
            complete: false,
          },
        ],
      },
      {
        id: 2,
        name: "Operators",
        completed: false,
        list: [
          {
            name: "Arthmetic",
            completed: false,
          },
          {
            name: "Assignment",
            completed: false,
          },
          {
            name: "Logical",
            completed: false,
          },
          {
            name: "unary",
            completed: false,
          },
          {
            name: "Ternary (Conditional)",
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
