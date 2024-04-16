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
            id: "variable_var",
            name: "var",
            complete: true,
          },
          {
            id: "variable_let",
            name: "let",
            complete: true,
          },
          {
            id: "variable_const",
            name: "const",
            complete: true,
          },
        ],
      },
      {
        id: 2,
        name: "Arrays",
        complete: false,
        list: [
          {
            name: "Creating an Array",
            complete: true,
          },
          {
            name: "Accessing Array Elements",
            complete: true,
          },
          {
            name: "Changing an Array Element",
            complete: true,
          },
          {
            name: "Converting an Array to a String",
            complete: true,
          },
          {
            name: "Access the Full Array",
            complete: true,
          },
          {
            name: "Arrays are Objects",
            complete: true,
          },
          {
            name: "Array Elements Can Be Objects",
            complete: true,
          },
          {
            name: "The length Property",
            complete: true,
          },
          {
            name: "Accessing the First Array Element",
            complete: true,
          },
          {
            name: "Accessing the Last Array Element",
            complete: true,
          },
          {
            id: "array_looping",
            name: "Looping Array Elements",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Adding Array Elements",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Associative Arrays",
            complete: true,
          },
          {
            id: "array_methods",
            name: "JavaScript new Array()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array length",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array toString()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array at()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array join()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array pop()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array push()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array shift()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array unshift()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array delete()",
            complete: true,
          },
          {
            id: "array_methods",
            name: "Array concat()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array copyWithin()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array flat()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array splice()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array toSpliced()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array slice()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array indexOf()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array lastIndexOf()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array includes()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array find()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array findIndex()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array findLast()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array findLastIndex()",
            complete: false,
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
