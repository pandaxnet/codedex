
//Initialize a variable to define the range
// let num = 30;

// //for loop to iterate through numbers from 1 to num
// for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {  // Check if divisible by both 3 and 5
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) { // Check if divisible by 3
//         console.log("Fizz");
//     } else if (i % 5 === 0) { // Check if divisible by 5
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }



//Multiplacation Table of 9
//Initialize a variable to define the multiple
let multiple = 9;
//Initialize an array to hold numbers from 0 to 9
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//for loop to iterate through the numbers array and print the multiplication table
for (i = 0; i <= numbers.length - 1; i++){
  console.log(multiple + " * " + numbers[i] + " = " + multiple*numbers[i]);
}