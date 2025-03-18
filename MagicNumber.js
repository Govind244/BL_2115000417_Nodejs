const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lower = 1;
let upper = 100;
let guess;

const guessNumber = () => {
  guess = Math.floor((lower + upper) / 2);
  rl.question(`Is your number ${guess}? (yes/lower/greater): `, (answer) => {
    if (answer.toLowerCase() === 'yes') {
      console.log(`Magic Number is: ${guess}`);
      rl.close();
    } else if (answer.toLowerCase() === 'lower') {
      upper = guess - 1;
      guessNumber();
    } else if (answer.toLowerCase() === 'greater') {
      lower = guess + 1;
      guessNumber();
    } else {
      console.log('Please respond with yes, lower, or greater.');
      guessNumber();
    }
  });
};

guessNumber();
