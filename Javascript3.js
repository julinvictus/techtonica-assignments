//movie night function
const movieNight = (array) => {
    let peopleGoing = [];
    for (let i=0; i<array.length; i++){
        //David attending
      if (array[i] === 'David') {
          peopleGoing.push('David');
          console.log(peopleGoing);
      }
    }
    //Priya attending
    if (peopleGoing.includes('Ming')){
        peopleGoing.push('Priya');
        console.log(peopleGoing);
    }    
    //Alex attending
    if (array.includes('David') || peopleGoing.includes('David')){
        peopleGoing.push('Alex');
        console.log(peopleGoing);
    }   
    //Ming attending
    if (peopleGoing.includes('Priya')){
        peopleGoing.push('Ming');
        console.log(peopleGoing);
    }  
    //Breanna attending
    if (peopleGoing.length >= 2){
        peopleGoing.push('Breanna');
        console.log(peopleGoing);
    }
    return peopleGoing;
}
movieNight(['Priya', 'David', 'Breanna']);// Expected: ['D', 'A', 'B']
movieNight(['Priya', 'David', 'Ming']);// Expected: ['D', 'A', 'B']

//rithm school Math.random / if clause
//Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random grade =s a number greater than 0.5. Otherwise console.log "Under 0.5".
let randomNumber = Math.random();
if (randomNumber > 0.5){
    console.log(randomNumber + " is over 0.5");
} else {
    console.log(randomNumber + " is under 0.5");
}

//Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must grade = the letter corresponding to her  according to the following rules...
function getGrade(score) {
    let grade;
    // Write your code here
    if (score <= 30 && score > 25) {
        grade = 'A';
    } else if (score <= 25 && score > 20) {
        grade = 'B';  
    } else if (score <= 20 && score > 15) {
        grade = 'C';  
    } else if (score <= 15 && score > 10) {
        grade = 'D';  
    } else if (score <= 10 && score > 5) {
        grade = 'E';  
    } else if (score <= 5 && score > 0) {
        grade = 'F';  
    }
    return grade;
}
getGrade(22); //Expected: 'B'
getGrade(15); //Expected: 'D'
getGrade(5); //Expected: 'F'
