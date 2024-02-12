const sumAll = function (value1, value2) {
    if (!value1 || !value2 || value1 < 0 || value2 < 0 || typeof value1 != "number" || typeof value2 != "number") {
        return "ERROR";
    }
    let output = 0;
    let start = 0;
    let end = 0;
    if (value1 < value2) {
        start = value1;
        end = value2;
    }
    else {
        start = value2;
        end = value1;
    }
    for (let i = start; i <= end; i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
