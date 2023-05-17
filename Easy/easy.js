// Write a function that takes in an array of numbers and outputs the average of all the numbers

// example array
const exarray = [0, 10, 50];

// here we create a function with the name arrayAVg and the x parameter
// the x is a placeholder for the array
function arrayAvg(x){
    let arraytotal = 0;
    for (i = 0; i < x.length; i++) {
        arraytotal += x[i];
    }
    return arraytotal/x.length
}

console.log(arrayAvg(exarray))