// Basic types
let id: number = 5;
let company: string = "GeraUAB";
let isPublished: boolean = true;
let x: any = [1, 2, "aga"];
// x = true; //no error
let myArr: number[] = [1, 3, 5, 7];
// myArr[0] = 'str'; // error
let anyArr: any[] = [1, "str", true];

// Tuples
let person: [number, string, boolean] = [1, "Brad", true];
// person[0] = "Brad"; // error

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "Tom"],
  [3, "John Lenon"],
];

// Union
let kazkas: string | number = "22";
kazkas = 22; // no error - type union;
// kazkas = true // error

// Enum
enum Directions1 {
  Up = 1, // default: 0
  Right,
  Down,
  Left,
}
console.log(Directions1[3]); // prinsts: "Down"
console.log(Directions1.Right); // prinsts: 2

enum Directions2 {
  Up = "Up",
  Right = "Right",
  Down = "Down",
  Left = "Left",
}
console.log(Directions2.Left); // prints: "Left"

// Objects
type User = {
  // type - only for primitives and unions
  id: number;
  name: string;
};
const user1: User = {
  id: 1, //   id: "1" - error
  name: "John Lenon",
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
let cystomerId2 = cid as number; // same as customerId --> type number / dif sintax

// Functions //// tsconfig.json: "noImplicitAny": false
function sum(x: number, y: number): number {
  return x + y;
}

// Void
function justConsole(message: string | number): void {
  console.log(message);
}

// Interfaces
interface userInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const jonas: userInterface = {
  id: 1, //  id: "1" - error [[+/- same as type, but type only for primitives and unions, interfaces for objects ok]]
  name: "John Lenon",
};

// Interfaces for functions
interface MathFunc {
  (x: number, y: number): number;
}
const addFunc: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Persona implements PersonInterface {
  id: number; // acces modifiers: public (default) / private (only from class) / protected (for class and subclasses (extended classes))
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is registered`;
  }
}
// const brad = new Persona(1, "Brad");
// const mike = new Persona(2, "Mike Tyson");
// console.log(brad.register());

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
// Subclasses
class Employee1 extends Persona {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp1 = new Employee1(3, "TomTom", "Dev");
console.log(emp1);
console.log(emp1.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 5]);
let strArray = getArray<string>(["john", "tom", "peter"]);
// numArray.push('helllo'); // no error if types any[] and no generics <>

// NEXT:
// npx create-react-app --template typescript
