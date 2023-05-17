//  create a function that finds a target value inside of an array
// if found in an array return its index, otherwise return -1.
// Use a function 
// use the built in method .indexOf() and/or for loops 

const nums = [4, 5, 6, 7, 0, 1, 2] //target: 0

function findTarget(array, target) {
    return array.indexOf(target)
}

console.log(findTarget(nums, 2))