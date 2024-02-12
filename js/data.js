const App = new Vue({
  el: "#app",
  data: {
    showMobileMenu: false,
    topics: [
      {
        id: 3,
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
