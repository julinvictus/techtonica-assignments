let vowels = ['a', 'e', 'i', 'o', 'u'];
function vowelsAndConsonants(s) {
    let consonants = [];
    for (let i = 0; i < s.length; i++){
        let isVowel = false;
        for (let j = 0; j < vowels.length; j++){
            if (s[i] === vowels[j]) {
                console.log(s[i]);
                isVowel = true;
            } 
        } 
        if (!isVowel){
            consonants.push(s[i]);
        }   
    }
    //printing consonants that were stored
    for(let k=0; k<consonants.length;k++){
        console.log(consonants[k]);
    }
}
vowelsAndConsonants('juliana');

// Another way, using 2 functions

function isVowel(char){
    const vowels = ['a','e','i','o','u'];
    for(let i = 0; i<vowels.length; i++){
      if(char === vowels[i]){
        return true;
      }
    }
    return false;
}
function vowelsAndConsonants (s){
    for(let i = 0; i <s.length; i++){
        if(isVowel(s[i])){
            console.log(s[i]);
        }
    }
    for(let i = 0; i <s.length; i++){
        if(!isVowel(s[i])){
            console.log(s[i]);
        }
    }
}
vowelsAndConsonants('juliana');