// let yourName: string = "Satyam";

// console.log("Hello "+ yourName);

// function sum(a: number, b: number){
//     return a + b;
// }

// let ans: number = sum(1, 2);
// console.log(ans);

// function delayedCall(anotherFn: () => void){
//     setTimeout(anotherFn, 4000);
// }

// function log() {
//      console.log("hi there!");
// }

// delayedCall(log);

// console.log("hum first!");

// function greet(name: string): string {
//     return "Hello " + name;
// }

// console.log(greet("satyam"));

// function isEven(num: number): boolean {
//     if(num % 2 == 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(3));
// console.log(isEven(8));

//////////////////////////////////////(: Interface :)//////////////////////////////////////////////

// interface User {
//   firstName: string;
//   age: number;
//   address?: {
//     city: string;
//     country: string;
//     pincode: number;
//   };
// }

// let user2: User = {
//   firstName: "Satyam",
//   age: 25,
// };

// let user: User = {
//   firstName: "Sonali",
//   age: 23,
//   address: {
//     city: "Orisa",
//     country: "India",
//     pincode: 123456,
//   },
// };

// function isLegalToVote(user: User): boolean {
//   if (user.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const ans = isLegalToVote(user);

// if (ans) {
//   console.log("Yes, You are eligible to vote.");
// } else {
//   console.log("I am illegal.");
// }

// interface People {
//     firstName: string,
//     age: number,
//     greet: () => string,
// }

// let person: People = {
//     firstName: "Sundar",
//     age: 45,
//     greet: () => {
//         return "google";
//     }
// }

//////////////////////////(: Class implements interface :)//////////////////////////////

interface People {
    name: string;
    age: number;
}

class Manager implements People {
    name: string;
    age: number;
    input: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.input = 124;
    }
}

//class -> object create
let user = new Manager("John", 30);
console.log(user.name);