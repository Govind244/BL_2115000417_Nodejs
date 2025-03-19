function primeFactorization(n) {
  let factors = [];

  while (n % 2 === 0) {
      factors.push(2);
      n = Math.floor(n / 2);
  }

  for (let i = 3; i * i <= n; i += 2) {
      while (n % i === 0) {
          factors.push(i);
          n = Math.floor(n / i);
      }
  }

  if (n > 2) {
      factors.push(n);
  }

  return factors;
}

let number = 100;
let primeFactors = primeFactorization(number);
console.log(`Prime factors of ${number}:`, primeFactors);
