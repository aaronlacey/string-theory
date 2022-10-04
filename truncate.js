function truncate(str) {
    let newStr = "";

    for (let i = 0; i < 15; i++) {

        newStr += str[i]

    }
    return newStr + "...";
}

console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));
console.log(truncate("Well, that's just, like, your opinion man."));