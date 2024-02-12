const repeatString = function (stringToRepeat, numberOfTimes) {
    if (numberOfTimes < 0) return "ERROR";
    let output = "";
    for (let i = 0; i < numberOfTimes; i++) {
        output += stringToRepeat;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
