let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;
} 
const output = sum(20, 50);
console.log(output);
console.log(bonus);
