// let number = +prompt("Enter the number:")
//  for (let i=0;i<=10;i++){
//     console.log(number + "*" + i + "=" +(number*i));
//  }

            // Array

            //  let myArray=[];
            // for ( let i=0;i<5;i++){
            //    let number = +prompt("Enter the number" + ":" + (i + 1) );
            //    myArray.push(number)
            // }
            //  let addition = 0;
            //  for ( let i=0;i<myArray.length;i++){
            //    addition += myArray[i];
            //    console.log("The addition of the array elements is " + addition + ".");
            //  }


            //   let myArray=[];
            // for ( let i=0;i<5;i++){
            //    let number = +prompt("Enter the number" + ":" + (i + 1) );
            //    myArray.push(number)
            // }
            //  let largestNumber= myArray[0];
            //  for  (let i=1; i< myArray.length;i++){
            //    if (myArray[i] > largestNumber){
            //       largestNumber = myArray[i]
            //    }
            //    console.log("The largest number is " + largestNumber);
            //  }


            // REVERSE STRING
//             let inputString = prompt("Please enter a string:");

// let reversedString = "";

// for (let i = inputString.length - 1; i >= 0; i--) {
//   reversedString += inputString[i];
// }

// console.log("Reversed String: " + reversedString);


// Factorial
let number= +prompt("Please enter a number:");
function factorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}
let result = factorial(number);

console.log("Factorial of " + number + " is " + result);