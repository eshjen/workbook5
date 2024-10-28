"use strict";

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

function isOver(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
  // 7 gets called first, and it is lover than 60, so it is false. 9 gets called but it is false, 64 gets called and it is true, 64 is greater than 60. it returns as TRUE because it is the 1st value over 60.
}
let firstValueOver60 = numbers.find(isOver60); // this function is finding the FIRST value that is over 60.
console.log(firstValueOver60);
// if youre trying to find the FIRST thing, or ONE thing, use .find / the find function loops through each of the numbers in the array and it says "if" & it uses the condition (if number is greater than 60, then return that number, else, keep going.) / Returns the value of the first element in the array where predicate is true, and undefined otherwise.

// shorter version:
// return arrayValue > 60;
function find(arrayofNumbers) {
  for (const number of arrayOfNumbers) {
    if (number > 60) {
      return number;
    }
  }
}

