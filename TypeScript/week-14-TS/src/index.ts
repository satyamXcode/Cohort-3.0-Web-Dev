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

// interface People {
//     name: string;
//     age: number;
//     isLegal(): boolean;
// }

// class Manager implements People {
//     name: string;
//     age: number;
//     input: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         this.input = 124;
//     }

//     isLegal(){
//         return this.age > 18;
//     }
// }

// //class -> object create
// let user = new Manager("John", 30);
// console.log(user.name);

//////////////////////////(: Type : Union & Intersection :)//////////////////////////////

////////////////////////////>>Types

// type Employee = {
//     name: string;
//     startDate: string;
// };

// type Manager = {
//     name: string;
//     department: string;
// };

// type TeamLead = Employee & Manager;

// let e: Employee = {
//     name: "harkirat",
//     startDate: "01-02-2004"
// }

// let m: Manager = {
//     name: "harkirat",
//     department: "Civil"
// }

// let t: TeamLead = {
//     name: "harkirat",
//     startDate: "01-02-2004",
//     department: "Civil"
// }

////////////////////////////>> Interface

// interface Admin {
//     name: string;
//     permission: string;
// }

// interface User {
//     name: string;
//     age: number;
// }

// type UserOrAdmin = User | Admin;

// function greet(user: UserOrAdmin){
//     console.log(user.name);
// }


///////////////////////////////////////////(: Arrays in TypeScript :)//////////////////////////////////////////////

// function getMax(nums: number[]){
//     let maxValue = -100000;

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > maxValue){
//             maxValue = nums[i];
//         }
//     }
//     return maxValue;
// }

// let maxVal = getMax([1,2,3,4,7,5]);

// console.log(maxVal);

// Print list of user whos age is greater than 18.

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUsers(users: User[]){
    let ans = [];
    
    for(let i = 0; i < users.length; i++){
        if(users[i].age > 18){
            ans.push(users[i]);
        }
    }
    return ans;
}

const filteredUsers = filterUsers([{
    firstName: "Satyam",
    lastName: "Jaiswal",
    age: 24
}])

console.log(filteredUsers);

