// Math Max Exo//
// 1- This example is finds the min of x and y and assigns it to z: \\
var x=10, y=-20 ;
var z = Math.max(x , y); 

const array1 = [x, y, z];

console.log(Math.max(...array1));
//________________________________\\ 

// 2- Example N° with using max.apply(null, Array)

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7 maxi

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2 mini