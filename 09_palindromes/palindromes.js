const palindromes = function (words) {
    const cleanWords = clean(words);
    const wordLength = cleanWords.length - 1;
    for (let i = 0, j = wordLength; i < wordLength / 2; i++, j--) {
        if (cleanWords[i] !== cleanWords[j]) return false;
    }
    return true;
};

const clean = (words) => {
    let output = words;
    if (words[words.length - 1] === "." || words[words.length - 1] === "!") {
        output = words.substring(0, words.length - 1);
    }
    output = output.split("").filter((letter) => letter != ',' && letter != " ").join("");
    console.log(output);
    return output.toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
