////////////////////(: Record & Map :)//////////////////////////

//Normal way to create object in type

// type User002 = {
//     id: string;
//     username: string;
// }

// type Users = {
//     [key: string]: User002;
// }

// const users: Users = {
//     "ras@123": {
//         id: 'ras@123',
//         username: "satyam"
//     },
//     "sar@321": {
//         id: 'sar@321',
//         username: 'raman'
//     },
// }

// Record : let's you give a cleaner type of objects

// type Users = Record<string, {age: number; name: string}>;

// const users: Users = {
//     "ras@123": {age: 23, name: "satyam"},
//     "sar@321": {age: 25, name: "pulkit"},
// }

// Map: Gives you an even fancier way to deal with objects, very similar to Maps in C++

type User003 = {
    name: string;
    age: number;
    email: string;
} 

const users = new Map<string, User003>();

users.set("rat@123", {name:"harkirat", age: 30, email: "harkirat@gmail.com"});
users.set("tar@321", {name: "satyam", age: 24, email: "satyam@gmail.com"});

const user = users.get("rat@123");
console.log(user);