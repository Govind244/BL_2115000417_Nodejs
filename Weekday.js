const number = parseInt(process.argv[2]);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

if (number >= 0 && number <= 6) {
  console.log(days[number]);
} else {
  console.log('Invalid input');
}
