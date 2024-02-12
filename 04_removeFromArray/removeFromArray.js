const removeFromArray = function (array, value1, value2, value3, value4) {
    let args = [value1, value2, value3, value4];
    for (const arg of args) {
        if (arg) {
            for (let i = 0; i < array.length; i++) {
                while (array[i] === arg) {
                    array.splice(i, 1);
                }
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
