/*
setTimeout - runs function once after specific time

- pass function reference
- duration in ms (1000ms is 1 s)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
- on window object

*/

function sayHello(){
    console.log('hey john');
}

// setTimeout(sayHello, 2000)

// will not work
// setTimeout(sayHello(), 2000)

// alternative approach, ES6 arrow functions

// setTimeout(function(){
//     console.log('hello john');
// }, 5000)


// pass arguments

function showScore(name,score){
    console.log(`hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 5000, 'george', 99)

const firstID = setTimeout(showScore, 5000, 'george', 99)
const secondID = setTimeout(showScore, 5000, 'george', 50)
const fourthID = setTimeout(showScore, 5000, 'george', 43)

console.log(firstID);
console.log(secondID);
console.log(fourthID);

clearTimeout(fourthID)