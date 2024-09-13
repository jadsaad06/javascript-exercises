const repeatString = function(word, number) {
    let newWord = '';

    if(number >= 0){
        for(let i = 0; i < number; i++){
            newWord += word;
        }
    }else{
        return "ERROR";
    }

    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
