// title: slice array into multiple array

const arr = [1, 2, 3, 4, 5, 6];

// slice
const sliced = arr.slice(1, 3)
//console.log(sliced)

// Clone array
const cloned = arr.slice()
//console.log(arr === cloned) //result should be false

// Array like object to array
function toArray() {
    return Array.prototype.slice.call(arguments);
}
const argArray = toArray(4, 2, 7, 9, 'test')
//console.log(argArray)
//console.log(argArray.__proto__.constructor);