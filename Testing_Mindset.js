//A function that takes in two numbers and returns true if the first number is larger than the second number. Otherwise, it should return false.
const largestNumber = (num1, num2) => {
    let result;
    if (num1 > num2){
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log(largestNumber(3, 4));  // Expected: false
console.log(largestNumber(10, 5)); // Expected: true
console.log(largestNumber(101, 1));  // Expected: true

//A function that takes in an array of numbers, and returns the third number in the array.
const thirdNumberInArray = myArray => {
    let result;
    result = myArray[2];
    return result;
} 
console.log(thirdNumberInArray([3, 4, 5, 7, 2]));  // Expected: 5
console.log(thirdNumberInArray([5, 8, 15, 67, 772])); // Expected: 15
console.log(thirdNumberInArray([57, 3, 45, 687, 72, 7]));  // Expected: 45

//A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and target. Return whether target number is between the min and the max (inclusive).
const targetNumberIsBetween = (min, max, target) => {
    let result;
    if (min < target && target < max){
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log(targetNumberIsBetween(3, 4, 5));  // Expected: false
console.log(targetNumberIsBetween(5, 8, 6)); // Expected: true
console.log(targetNumberIsBetween(57, 3, 45));  // Expected: false

//A function that takes in a number, and prints the word "Hello" that many times.
const repeatThatManyTimes = num => {
    let result;
    for (i=0; i<num; i++){
        console.log('Hello');
    }
    return result;
}
console.log(repeatThatManyTimes(3));  // Expected: word hello repeated 3 times
console.log(repeatThatManyTimes(5)); // Expected: word hello repeated 5 times
console.log(repeatThatManyTimes(45));  // Expected: word hello repeated 45 times