// Tells execution time
const execTime = (arg, functionName)  => {
    console.time('execution time: ');
    functionName(arg);
    console.timeEnd('execution time: ');
    return functionName(arg);
}
///////////

const mysteryFunction0 = function(array) {
    const myFavoriteNum = 7;
    for (i = 0; i < array.length; i++) {
      if (array[i] === myFavoriteNum) {
        return true;
      }
    }
    return false;
  }
  
// execTime([1, 2, 3, 4, 5], mysteryFunction0);
// execution time: : 0.072021484375ms
// execTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mysteryFunction0)
// execution time: : 0.01318359375ms
// mysteryFunction0 is O(n) 
// Since it's a for loop, it grows linearly and in direct proportion to the size of the input data set.

const mysteryFunction1 = function(array) {
    index = 4;
    return array[index];
  }
  
// execTime([1, 2, 3, 4, 5], mysteryFunction1)
// execution time: : 0.05810546875ms  
//execTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mysteryFunction1)
// execution time: : 0.011962890625ms
// mysteryFunction1 is O(1) 
// Since it goes straight to a specific element (index 4), it will always execute in the same time regardless of the size of the input data set.

var mysteryFunction2 = function(n) {
    let primes = []
    for (i = 2; i < n; i++) {
      let factorFound = false;
      for (j = 2; j < n; j++) {
        if (i % j == 0) {
          factorFound = true;
        }
      }
      if (factorFound === false) {
        primes.push(i);
      }
    }
    return primes.length;
  }

// execTime([1, 2, 3, 4, 5], mysteryFunction2)
// execution time: : 0.08984375ms
// execTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mysteryFunction2)
//execution time: : 0.015869140625ms
// mysteryFunction2  is O(n2) 
// Since it's a nested loop, the number of function calls is directly proportional to the square of the size of the input data set. 

const mysteryFunction3 = function(array) {
    myLength = array.length;
    if (myLength % 2 == 0) {
      return "even length";
    } else {
      return "odd length";
    }
  }

// execTime([1, 2, 3, 4, 5], mysteryFunction3)
// execution time: : 0.064208984375ms
// execTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mysteryFunction3)
// execution time: : 0.014892578125ms
// mysteryFunction3 is O(1)
// Since it goes straight to a specific situation (array.length % 2 == 0), it will always execute in the same time regardless of the size of the input data set.

var mysteryFunction4 = function(string) {
    let eCount = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] === 'e') {
        eCount++;
      }
    }
    return eCount;
  }

// execTime('juliana', mysteryFunction4)
// execution time: : 0.029052734375ms
//execTime('amazingfunction', mysteryFunction4)
// execution time: : 0.010986328125ms
// mysteryFunction4 is O(n)
// Since it's a for loop, it grows linearly and in direct proportion to the size of the input data set.

var mysteryFunction5 = function(array) {
    array.sort();
  }

// execTime([1, 2, 3, 4, 5], mysteryFunction5)
// execution time: : 0.044189453125ms
// execTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mysteryFunction5)
// execution time: : 0.01708984375ms
// mysteryFunction5: We can't determine Runtime Complexity for this function since it uses JS sort method. Documentation says "The time and space complexity of the sort cannot be guaranteed as it depends on the implementation."

const mysteryFunction6 = function(dict, key) {
    var value = dict[key];
    return value;
  }

// execTime(([1, 2, 3, 4, 5], 2), mysteryFunction6)
// execution time: : 0.012939453125ms
// execTime(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), mysteryFunction6)
// execution time: : 0.00830078125ms
// mysteryFunction6 is O(1)
// Since it goes straight to a specific element (dict and key that user assigns as parameter when calling the function), it will always execute in the same time regardless of the size of the input data set.

const mysteryFunction7 = function(array) {
    // Assume `array` is an array of ints sorted from smallest to biggest
    const lookingFor = 9;
    let lowerBound = 0;
    let upperBound = array.length - 1;
    let guessIndex = Math.floor(upperBound / 2);
    while (lowerBound <= upperBound) {
      if (array[guessIndex] === lookingFor) {
        return true;
      } else if (lookingFor < array[guessIndex]) {
        upperBound = guessIndex - 1;
      } else {
        lowerBound = guessIndex + 1;
      }
      guessIndex = Math.floor((lowerBound + upperBound) / 2);
    }
    return false;
  }

// execTime([1, 2, 3, 4, 5], mysteryFunction7)
// execution time: : 0.094970703125ms  
// execTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mysteryFunction7)
// execution time: : 0.01513671875ms
// mysteryFunction7 is O(log n) 
// Since it is a binary search, it splits the array to then have it sorted.

const mysteryFunction8 = function(dictionary) {
    for(var key in dictionary) {
      var value = dictionary[key];
      if (key == value) {
        return true;
      }
      return false;
    }
  }  

// execTime([1, 2, 3, 4, 5], mysteryFunction8)
// execution time: : 0.06494140625ms 
// execTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mysteryFunction8)
// execution time: : 0.01806640625ms
// mysteryFunction8 is O(n)
// Since it's a for loop, it grows linearly and in direct proportion to the size of the input data set.