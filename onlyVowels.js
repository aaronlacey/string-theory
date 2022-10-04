function onlyVowels(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" ||
            str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") { newStr += str[i] }
    } return newStr;
}

console.log(onlyVowels('Colin Jaffe'))
console.log(onlyVowels('quickly'))
console.log(onlyVowels('Anthony DeRosa'))