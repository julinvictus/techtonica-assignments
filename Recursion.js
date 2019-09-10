// Write a recursive function isPalindrome(aString) that returns true if aString is a palindrome.
// REGULAR ONE:
function isPalindrome(aString){
  let stringIntoArray = aString.split('');
  let len = stringIntoArray.length;
  for (let i = 0; i < Math.floor(len/2); i++) {
      if (stringIntoArray[i] !== stringIntoArray[len - 1 - i]) { 
          return false;
      }
  }
  return true;
}
isPalindrome('racecar');
// Expected: true

//RECURSIVE ONE:

// Write a function that uses recursion to calculate the factorial of a number.
// FACTORIAL = product of all positive whole numbers less than or equal to n.
// REGULAR ONE:

function factorialForLoop(num) { 
    let factorial = 1;
    for (var i = 1; i <= num; i++) {  
      factorial = factorial * i;
    }
    return factorial;      
}  
factorialForLoop(4);  
// Expected: 24                          
  
// RECURSIVE ONE:

function factorialRecursive(num) {
    if (num === 1) {
      return 1;
    }
    return num * factorialRecursive(num - 1);
}
factorialRecursive(4);
// Expected: 24  

// FIBONACCI
// REGULAR ONE:
function fibonacciWhile(num){
    var first = 0, second = 1, temp;
    if (num === 0 || num === 1) {
      return num;
    }
    while (num >= 2) {
      temp = second;
      second = first + second;
      first = temp;
      num--;
    }
    return second;
}
fibonacciWhile(10)
// Expected: 55

// RECURSIVE ONE:
function fibonacciRecursive(num) {
    if (num <= 1) {
      return num;
    }
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}
fibonacciRecursive(10);
// Expected: 55