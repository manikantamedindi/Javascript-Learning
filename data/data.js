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
        ],
      },
      {
        id: 3,
        name: "Array search",
        complete: false,
        list: [
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
      {
        id: 4,
        name: "Array Sorting",
        complete: false,
        list: [
          {
            id: "array_methods",
            name: "Array sort()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array reverse()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array toSorted()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array toReversed()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Sorting Objects",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Numeric Sort",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Random Sort",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Math.min()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Math.max()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Home made Min()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Home made Max()",
            complete: false,
          },
        ],
      },
      {
        id: 5,
        name: "Array Iteration Methods",
        complete: false,
        list: [
          {
            id: "array_methods",
            name: "Array forEach",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array map()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array flatMap()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array filter()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array reduce()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array reduceRight()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array every()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array some()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array from()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array keys()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array entries()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array with()",
            complete: false,
          },
          {
            id: "array_methods",
            name: "Array Spread (...)",
            complete: false,
          },
        ],
      },
      {
        id: 6,
        name: "Array Const",
        list: [
          {
            id: 1,
            name: "Const Arrays",
          },
        ],
      },
      {
        id: 7,
        name: "Javascript Objects",
        list: [
          {
            id: 1,
            name: "Object Defination",
          },
          {
            id: 1,
            name: "Object Properties",
          },
          {
            id: 1,
            name: "Object Display",
          },
          {
            id: 1,
            name: "Object Accessors",
          },
          {
            id: 1,
            name: "Object Constructors",
          },
          {
            id: 1,
            name: "Object Prototypes",
          },
          {
            id: 1,
            name: "Object Iterables",
          },
          {
            id: 1,
            name: "Object Sets",
          },
          {
            id: 1,
            name: "Object Maps",
          },
          {
            id: 1,
            name: "Object Refrences",
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
