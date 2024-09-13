const reverseString = function(string) {
    let newWord = "";

    for(let i = string.length - 1; i >= 0; i--){
        newWord += string[i];
    }
        
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
