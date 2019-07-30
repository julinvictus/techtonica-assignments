//Write a function called printVacations whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array
function printVacations(array){
    for( let i=0; i<array.length; i++){
        console.log( `${array[i][0]} really wants to go to ${array[i][1]}`);
    }
}
printVacations([ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]);

//Follow the prompt for Activity #1, but use this format for the input array instead
function printVacations2(array){
    for( let i=0; i<array.length; i++){
        let countries = array[i][1];
        let countriesReconstructed = ''; 
        for ( let j=0; j<countries.length; j++){
            if (j === countries.length-1){
                countriesReconstructed += ' or ';
            } else if (j !== 0) {
                countriesReconstructed += ', ';
            } 
            countriesReconstructed += countries[j];
            
        }
        console.log( `${array[i][0]} really wants to go to ${countriesReconstructed}`);
    }
}
printVacations2([ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]);

//Write a program in JavaScript to print Multiplication table of given number using for loop. Also try the program using while loop.
let result = '\n ';
for (let i=1; i<11; i++){
    for (let j=1; j<11; j++){
        result += i*j + ' ';
    }
    result += '\n';
}
console.log(result);

let result = '\n ';
let i = 1;
while (i<11){
    for (let j=1; j<11; j++){
        result += i*j + ' ';
    }
    i++;
    result += '\n';
}
console.log(result);