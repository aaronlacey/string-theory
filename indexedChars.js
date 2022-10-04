function indexedChars(str){
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        newStr += i;
        newStr += str[i]
    }

    return newStr;
}

console.log(indexedChars("hello"));
console.log(indexedChars("bye"));