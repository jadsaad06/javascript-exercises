const sumAll = function(num1, num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0){
        let ans = 0;
        let finish = Math.max(num1, num2);
        let start = Math.min(num1, num2);

        for(let i = start; i <= finish; i++){
            ans += i;
        }
        return ans;
    }else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
