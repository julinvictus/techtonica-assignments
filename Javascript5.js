//Refactor your code to replace your if/else statement(s) with switch statement(s).
function calculate(num1, str, num2){
    let result;
    switch(str){
      case "+": 
          result = num1 + num2; 
          break;
      case "-": 
          result = num1 - num2; 
          break;
      case "*": 
          result = num1 * num2; 
          break;
      case "/": 
          result = num1 / num2; 
          break;
      case "%": 
          result = num1 % num2; 
          break;
    }
    return result;
}
calculate(3, '*', 7);

//Refactor your code to replace your if/else statement(s) with switch statement(s).
const movieNight = (array) => {
    let peopleGoing = [];
    switch(array.join(' ')){
        case 'Priya David Alex': 
            peopleGoing.push('David', 'Alex', 'Breanna');
            console.log(peopleGoing); 
            break;
        case 'Priya David Ming':
            peopleGoing.push('David', 'Alex', 'Breanna');
            console.log(peopleGoing);
            break;
        case 'Priya Breanna Alex':
            peopleGoing.push('Priya', 'Ming', 'Breanna');
            console.log(peopleGoing);
            break;
        case 'Priya Breanna Ming':
            peopleGoing.push('Priya', 'Ming', 'Breanna');
            console.log(peopleGoing);
            break;
        case 'Breanna Alex Ming':
            peopleGoing.push('Priya', 'Ming', 'Breanna');
            console.log(peopleGoing);
            break;
        case 'David Breanna Alex':
            peopleGoing.push('David', 'Alex', 'Breanna');
            console.log(peopleGoing);
            break;
        case 'David Alex Ming':
            peopleGoing.push('David', 'Alex', 'Breanna');
            console.log(peopleGoing);
            break;
        case 'Alex Ming Priya':
            peopleGoing.push('Priya', 'Ming', 'Breanna');
            console.log(peopleGoing);
            break;
        case 'David Breanna Ming':
            peopleGoing.push('David', 'Alex', 'Breanna');
            console.log(peopleGoing);
            break;
        case 'Priya David Breanna':
            peopleGoing.push('David', 'Alex', 'Breanna');
            console.log(peopleGoing);
            break;
    }
    return peopleGoing;
}
movieNight(['Priya', 'David', 'Breanna']);// Expected: ['D', 'A', 'B']
movieNight(['Priya', 'David', 'Ming']);// Expected: ['D', 'A', 'B']

// Hackerrank challenge 1
switch(num){
    case 1: 
        console.log('ONE'); 
        break;
    case 2: 
        console.log('TWO'); 
        break;
    case 3: 
        console.log('THREE'); 
        break;
    case 4: 
        console.log('FOUR'); 
        break;
    case 5: 
        console.log('FIVE'); 
        break;
    case 6: 
        console.log('SIX'); 
        break;
    case 7: 
        console.log('SEVEN'); 
        break;
    case 8: 
        console.log('EIGHT'); 
        break;
    case 9: 
        console.log('NINE'); 
        break;
    default:
        console.log('PLEASE TRY AGAIN');
}

//Hackerrank challenge 2
function getLetter(s) {
    let letter;
    
    switch(s[0]){
        case 'a': 
        case 'e': 
        case 'i': 
        case 'o': 
        case 'u': 
            letter = 'A'; 
            break;
    }
    switch(s[0]){
        case 'b': 
        case 'c': 
        case 'd': 
        case 'f': 
        case 'g': 
            letter = 'B'; 
            break;
    }
    switch(s[0]){
        case 'h': 
        case 'j': 
        case 'k': 
        case 'l': 
        case 'm': 
            letter = 'C'; 
            break;
    }
    switch(s[0]){
        case 'n': 
        case 'p': 
        case 'q': 
        case 'r': 
        case 's': 
        case 't': 
        case 'v': 
        case 'w': 
        case 'x': 
        case 'y': 
        case 'z': 
            letter = 'D'; 
            break;
    }
    return letter;
}
getLetter('juliana');// Expected: "C"
getLetter('adriana');// Expected: "A"
getLetter('bene');// Expected: "B"
