// 8kyu Exclamation marks series #1: Remove a exclamation mark from the end of string
//remove ! from any string end if exists:
function remove(s: string): string {
  const strArr: string[] = s.split("");
  strArr[strArr.length - 1] == "!"
    ? strArr.splice(strArr.length - 1)
    : undefined;
  return strArr.join("");
}
// console.log(remove("Hi!"));

// 6kyu - Valid Braces ----------------------------------------------------------
// is valid parentheses, brackets and curly braces: ()[]{} ??
// "([{}])"   =>  True
// "[({})](]" =>  False

function validBraces(braces: string): boolean {
  const strArr: string[] = braces.split("");
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
  } else {
    return false;
  }
}
// for now works only on 'mirror' brackets: ([{}])
// Doesn't work: ({})[({})] // (){}[]
// good version:
function clearBraces(br: string): boolean {
  const strArr: string[] = br.split("");
  let bool: boolean = true;
  while (bool) {
    bool = false;
    for (let i = 0; i < strArr.length - 1; i++) {
      if (
        (strArr[i] === "{" && strArr[i + 1] === "}") ||
        (strArr[i] === "(" && strArr[i + 1] === ")") ||
        (strArr[i] === "[" && strArr[i + 1] === "]")
      ) {
        strArr.splice(i, 2);
        bool = true;
      }
    }
  }
  return strArr.length === 0 ? true : false;
}
// console.log(clearBraces("({})[({})]"));
// console.log(clearBraces("[({})](]"));
// console.log(clearBraces("({[]})"));

// *kyu - Name name name ----------------------------------------------------------
//
