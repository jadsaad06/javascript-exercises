const sumAll = function(num1, num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0){
        let ans = 0;
        for(let i = num1; i <= num2; i++){
            ans += i;
        }
        return ans;
    }else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
