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
            complete: true,
          },
          {
            name: "let",
            complete: true,
          },
          {
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
            complete: false,
          },
          {
            name: "Array Elements Can Be Objects",
            complete: false,
          },
          {
            name: "The length Property",
            complete: false,
          },
          {
            name: "Accessing the First Array Element",
            complete: false,
          },
          {
            name: "Accessing the Last Array Element",
            complete: false,
          },
          {
            name: "Looping Array Elements",
            complete: false,
          },
          {
            name: "Adding Array Elements",
            complete: false,
          },
          {
            name: "Associative Arrays",
            complete: false,
          },
          {
            name: "JavaScript new Array()",
            complete: false,
          },
          {
            name: "Array length",
            complete: false,
          },
          {
            name: "Array toString()",
            complete: false,
          },
          {
            name: "Array at()",
            complete: false,
          },
          {
            name: "Array join()",
            complete: false,
          },
          {
            name: "Array pop()",
            complete: false,
          },
          {
            name: "Array push()",
            complete: false,
          },
          {
            name: "Array shift()",
            complete: false,
          },
          {
            name: "Array unshift()",
            complete: false,
          },
          {
            name: "Array delete()",
            complete: false,
          },
          {
            name: "Array concat()",
            complete: false,
          },
          {
            name: "Array copyWithin()",
            complete: false,
          },
          {
            name: "Array flat()",
            complete: false,
          },
          {
            name: "Array splice()",
            complete: false,
          },
          {
            name: "Array toSpliced()",
            complete: false,
          },
          {
            name: "Array slice()",
            complete: false,
          },
          {
            name: "Array indexOf()",
            complete: false,
          },
          {
            name: "Array lastIndexOf()",
            complete: false,
          },
          {
            name: "Array includes()",
            complete: false,
          },
          {
            name: "Array find()",
            complete: false,
          },
          {
            name: "Array findIndex()",
            complete: false,
          },
          {
            name: "Array findLast()",
            complete: false,
          },
          {
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
