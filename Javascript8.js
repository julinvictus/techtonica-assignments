//Write a function that takes a word and returns true if the word ends with tonica
let regexToSearchFor = /tonica/;
regexToSearchFor.test("Techtonica");
//Expected: true

//Write a function expression that takes a string replaces all instances of symantec with semantic
var string = "I love symantec";
var res = string.replace(/symantec/i, "semantic");
res
//Expected: "I love semantic"

//Write a function that takes a string and deletes all words that end in ing
var string = "I'm running cycling hiking";
var res = string.replace(/ing/gi, "");
res
//**working on it

//Write a function that takes a string and returns true if it is an email address
let regexToSearchFor = /@/;
regexToSearchFor.test("juliana@place.com");
//Expected: true

//Write a function that takes a string containing names separated by commas like "Leah, Russell, Michelle" and returns an array of names, ["Leah", "Russell", "Michelle"]
var string = "Leah, Russell, Michelle";
var res = string.replace(/w/, "[/w/]");
res
//**working on it