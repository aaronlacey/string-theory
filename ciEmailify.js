function ciEmailify(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr += ".";
        } else {
            newStr += str[i];
        }
    }

    newStr += "@codeimmersives.com";
    return newStr.toLowerCase();


}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony Derosa'));