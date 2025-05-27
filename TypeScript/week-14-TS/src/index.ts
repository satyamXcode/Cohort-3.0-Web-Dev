// let yourName: string = "Satyam";

// console.log("Hello "+ yourName);

// function sum(a: number, b: number){
//     return a + b;
// }

// let ans: number = sum(1, 2);
// console.log(ans);

function delayedCall(anotherFn: () => void){
    setTimeout(anotherFn, 4000);
}

function log() {
     console.log("hi there!");
}

delayedCall(log);

console.log("hum first!");





