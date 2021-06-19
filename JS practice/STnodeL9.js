// const arr = [3,6,1,7,4,2,5]
// const sorted = arr.sort()
// console.log(sorted)

// Concat multiple arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const sum = arr1.concat(arr2)
// console.log(sum)
const sum2 = [...arr1, ...arr2]
//console.log(sum2)

const sum3 = [].concat(arr1, arr2, 7,8,9); // concat consum infinity value.
//console.log(sum3)