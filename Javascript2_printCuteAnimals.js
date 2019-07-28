function printCuteAnimals(array){
    //print the entire array and its length.
    let result = `My cute animals were: `;
    result += array;
    result += `\n I had ${array.length} animals`;
    //Print the array after you have called the .pop() method on it.
    let usingPop = array.pop();
    result += `\n But then my ${usingPop} died :( `; 
    //Concatenate another array 
    let newArray = ['turtle', 'rabbit'];
    let concatArray = array.concat(newArray);
    //Print the array again and its new length
    result += `\n Now I have: ${concatArray} `;
    result += `\n I have ${concatArray.length} animals :D`;
    return result;
}

