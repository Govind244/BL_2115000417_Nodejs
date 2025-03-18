const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the conversion type (1: Feet to Inch, 2: Feet to Meter, 3: Inch to Feet, 4: Meter to Feet): ', (choice) => {
  rl.question('Enter the value to convert: ', (value) => {
    const numValue = parseFloat(value);

    switch (choice) {
      case '1':
        console.log(`${numValue} Feet is equal to ${numValue * 12} Inches`);
        break;
      case '2':
        console.log(`${numValue} Feet is equal to ${numValue * 0.3048} Meters`);
        break;
      case '3':
        console.log(`${numValue} Inches is equal to ${numValue / 12} Feet`);
        break;
      case '4':
        console.log(`${numValue} Meters is equal to ${numValue * 3.28084} Feet`);
        break;
      default:
        console.log('Invalid choice. Please select a valid option.');
    }

    rl.close();
  });
});
