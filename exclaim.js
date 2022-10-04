function exclaim(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {

        if (str[i] === "?" || str[i] === ".") {
            newStr += "!";

        } else {
            newStr += str[i]
        }
    }
    return newStr;
}
console.log(exclaim("What are you doing? Are you a fool?"));
console.log(exclaim("This is fine."));