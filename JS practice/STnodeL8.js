// Delete specific element
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// Remove first element
numbers.shift()


// Remove last element
numbers.pop()
numbers.length = numbers.length - 1;


// // Remove inside element - splice using index 
numbers.splice(4, 1, true);


// // Remove inside element - splice using value
const toBeDeleted = 5;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === toBeDeleted) {
        numbers.splice(i, 1);
    }
}

// // Filter Array
const toBeDeleted1 = 6;
numbers = numbers.filter(item => item !== toBeDeleted1)


// // Delete operator
numbers[1] = undefined;
delete numbers[1]; //delete vallue but not index space
numbers[1] = 2 //can reassign a value preveously deleted index position


// // Reset whole array
let x = [1, 2, 3];
let y = x;
x = [];
// console.log(x,y); //note: why y elemnt is not cleard? whether the x stored in y variable. it becoz when we reassign the x var is empty arry, the value will be override.


// // Alternative
let a = [1, 2, 3];
let b = a;
a.length = 0;
console.log(a, b); //note: if we want the a and also b var will reset togeter then we can set the primary a varible length zero.that will be also make value zero b var.



// // Reset array using while loop
while (numbers.length) numbers.pop(); // 1 line er function code hole bracket na dileo cholbe.
// console.log(numbers)