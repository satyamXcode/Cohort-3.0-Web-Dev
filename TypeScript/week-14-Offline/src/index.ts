interface User {
    name: string;
    age: number;
}

let user1: User = {
    name: "satyam",
    age: 25
};

let user2: User = {
    name: "Sonali",
    age: 23
};

function sumOfAge(Id1: User, Id2: User): number{
    return Id1.age + Id2.age;
}

console.log(sumOfAge(user1, user2));
