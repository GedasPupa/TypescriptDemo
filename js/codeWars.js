"use strict";
// 8kyu
//remove ! from any string if exists:
function remove(s) {
    const strArr = s.split("");
    strArr[strArr.length - 1] == "!"
        ? strArr.splice(strArr.length - 1)
        : undefined;
    return strArr.join("");
}
// console.log(remove("Hi!"));
// 6kyu
// is valid parentheses, brackets and curly braces: ()[]{} ??
// "([{}])"   =>  True
// "[({})](]" =>  False
function validBraces(braces) {
    const strArr = braces.split("");
    if (strArr.length % 2 !== 0) {
        return false;
    }
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "{" || strArr[i] === "}") {
            strArr[i] = "a";
        }
        if (strArr[i] === "(" || strArr[i] === ")") {
            strArr[i] = "b";
        }
        if (strArr[i] === "[" || strArr[i] === "]") {
            strArr[i] = "c";
        }
    }
    for (let i = 0; i < strArr.length / 2; i++) {
        if (strArr[i] === strArr[strArr.length - 1 - i]) {
            strArr[i] = "T";
            strArr[strArr.length - 1 - i] = "T";
        }
    }
    if (strArr.find((el) => el !== "T") === undefined) {
        return true;
    }
    else {
        return false;
    }
}
// for now works only on 'mirror' brackets:
console.log(validBraces("([{}])"));
