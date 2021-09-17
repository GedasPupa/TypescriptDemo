const button = document.getElementById("addition_button")! as HTMLElement;
const input1 = document.getElementById("n1")! as HTMLInputElement;
const input2 = document.getElementById("n2")! as HTMLInputElement;
const resultArea = document.getElementById("result_area")! as HTMLElement;

const add = (n1: number, n2: number): number => {
  return typeof n2 === "number" && typeof n1 === "number" ? n1 + n2 : +n1 + +n2; // unary plus for conversion
};

button.addEventListener("click", () => {
  resultArea.innerText = "| Result: ";
  resultArea.innerText += add(
    parseFloat(input1.value),
    parseFloat(input2.value)
  );
});

class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
