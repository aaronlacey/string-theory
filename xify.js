function xify(str) {

    let newStr = "";

    for (let i = 0; i < str.length; i++) {


        newStr += "x";
    }
    return newStr;

}

console.log(xify('hello'));
console.log(xify('hi there'));
