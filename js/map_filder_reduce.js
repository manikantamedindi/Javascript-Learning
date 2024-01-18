/**
 * map
 * filter
 * reduce
 */

// const arr = [5, 1, 3, 2, 6];

// function double(x) {
//   return x * 2;
// }
// const double = (x) => x * 2;

// const output = arr.map((x) => x.toString(2));
// console.log(output);

// filter
// const arr = [5, 1, 3, 2, 6];

// const output = arr.filter((x) => x % 2);
// console.log(output);

// Reduce
const arr = [5, 1, 3, 2, 6];
// ! find some of values from above array

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));
