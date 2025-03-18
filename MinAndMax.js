let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900+100));
}
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log("Maximum number is: " + max+" and Minimum number is: " + min);