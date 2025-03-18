let balance = 100;
let wins = 0;
let bets = 0;

while (balance > 0 && balance < 200) {
  let bet = Math.random() < 0.5 ? 1 : 0; 

  if (bet === 1) {
    balance += 1;
    wins++;
  } else {
    balance -= 1;
  }

  bets++;
}

console.log(`Gambler's final balance: Rs ${balance}`);
console.log(`Total bets made: ${bets}`);
console.log(`Total wins: ${wins}`);

if (balance === 0) {
  console.log("Gambler went broke.");
} else if (balance === 200) {
  console.log("Gambler reached the goal of Rs 200!");
}
