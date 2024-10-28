"use strict";

let numbers =  [7, 9, 64, 60, 12, 13, 65, 62];

function isOver(arrayValue){
if(arrayValue > 60){
    return true;
} else {
    return false;
}
}
let firstValueOver60 = numbers.find(isOver60); // this function is finding the FIRST value that is over 60.
console.log(firstValueOver60);
// if youre trying to find the FIRST thing, or ONE thing, use .find