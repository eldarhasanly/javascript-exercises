const sumAll = function(num1, num2) {
    let sum = 0;
    let condition;

    if (num1 < 0 || num2 < 0) return "ERROR";

    if (num1 % 1 !== 0 || num2 % 1 !== 0) return "ERROR";

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    if  (num1 > num2) {
        condition = num1 - num2;

        for (let i = 0; i <= condition; i++) {
            sum += num2;
            num2++;
        }
    
        return sum;
    } else {
        condition = num2 - num1;

        for (let i = 0; i <= condition; i++) {
            sum += num1;
            num1++;
        }
    
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
