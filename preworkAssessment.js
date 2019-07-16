// Welcome to the prework assessment!

// Exercise 1. Declare a variable called animal and give it a value of your choice
let animal = "dog";

// Exercise 2. Write a conditional that does the following:
// If the value of animal is "lion", print to the console "I'm scared!"
// If the value of animal is "dog", print to the console "So cute"
// If the value of animal is "frog", print to the console "Ribbit ribbit"
// For any other value, print "Just another animal"
if (animal === "lion") {
    console.log("I'm scared!");
} else if (animal === "dog") {
    console.log("So cute");
} else if (animal === "frog") {
    console.log("Ribbit ribbit");
} else {
    console.log("Just another animal");
}

// Exercise 3. Declare 2 variables called person1Age and person2Age and give them values of your choice.
// Write a conditional that does the following:
// If both ages are less than 18, print "You are both children"
// Otherwise, print "At least one adult here" 
let person1Age = 16;
let person2Age = 52;
if (person1Age < 18 && person2Age < 18) {
    console.log("You are both children");
} else {
    console.log("At least one adult here");
}

// Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)
myArray = [];
for ( let i = 20; i >= 10; i -- ) {
    myArray.push(i);
}
console.log (myArray);

// Exercise 5. Write a while loop that prints the multiples of 5 from 5 to 50 inclusive 
// (i.e. 5, 10, 15, 20 ...)
var num = 5;
myArray = [];
while (num <= 50) {
    if (num % 5 === 0)
    myArray.push(num);
    num ++;
}
console.log(myArray);


// Exercise 6. Declare a variable called 'flavors' that is an array of 3 ice cream flavors
const flavors = ['chocolate', 'vanilla', 'strawberry'];

// Exercise 7. Update the second element of the array to be a different value
flavors[1] = "cherry";

// Exercise 8. Add 2 more items to the array
flavors.push('coffee', 'coconut');

// Exercise 9. Write a function called multiply that takes in 3 numbers, and returns
// the product of the 3 numbers multiplied together
const multiplyThreeNumbers = (num1, num2, num3) => {
    let result;
    result = num1 * num2 * num3;
    return result;
}
multiplyThreeNumbers(2,3,4);

// Exercise 10. Write a function that takes in an integer. The function should print all
// integers from 1 to that number. Next to each one it should print whether 
// it is even or odd. For example, if the number is 4, print:
// 1 odd
// 2 even
// 3 odd
// 4 even
const oddOrEven = num => {
    for (let i=1; i<=num; i++){
      if (i % 2 == 0) {
        console.log(`${i} even`);
      } else {
        console.log(`${i} odd`);
      }
    } 
}
oddOrEven(6); 

// Exercise 11. Make an object called pet that contains 2 properties:
// animal (representing what type of animal the pet is)
// age (representing the age of the pet)
const pet = {
    animal : 'dog',
    age : 10
}

// Exercise 12. Print the pet's age
pet.age;

// Exercise 13. Update pet's age to be a different value
pet.age = 8;

// Exercise 14. In the comments below, write a sentence explaining what each of the following data types are.
// String - A sequence of characters
// Number - A sequence of numbers
// Boolean - A logical data type with values true or false
// Array - An ordered collection of data
// Object - A combination of primitive data-types (Number, String, Boolean, etc)
// undefined - The value of variables that have just been declared or are empty

//Exercise 15 Add. a new file to the $PATH environmental variable
PATH=$PATH:$HOME/scripts

//Exercise 16. Please explain how the internet works. Your answer should include answers to the following questions: 


How are the devices on the internet physically connected to each other?
// Through electricity, light or radio
How is information physically transmitted from device to device?
// Through packets of information
How does one device find another it’s trying to communicate with?
// Through addresses called IPs
What methods do devices on the internet use to communicate?
// Through TCP/IP protocols

// The following questions are bonus questions! Only work on them once you’ve finished all other questions.


// Bonus 1. Write a function that takes in a string and returns the number of times the 
// character "a" appears in the string.
const countCharacter = (str, char) => {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        counter += 1;
      } 
    }
    return counter;
}
countCharacter('Juliana', 'a');  

// Bonus 2. Write a function that takes a string and returns which character appears the 
// most times in the string.
  
