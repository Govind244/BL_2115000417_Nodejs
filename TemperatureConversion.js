const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertTemperature(deg, type) {
  switch (type) {
    case 'C': 
      if (deg >= 0 && deg <= 100) {
        return (deg * 9/5) + 32;
      } else {
        return 'Input out of range (0°C to 100°C)';
      }
    case 'F': 
      if (deg >= 32 && deg <= 212) {
        return (deg - 32) * 5/9;
      } else {
        return 'Input out of range (32°F to 212°F)';
      }
    default:
      return 'Invalid conversion type';
  }
}

rl.question('Enter the temperature value: ', (value) => {
  rl.question('Enter the conversion type (C for Celsius to Fahrenheit, F for Fahrenheit to Celsius): ', (type) => {
    const result = convertTemperature(parseFloat(value), type);
    console.log(`Converted value: ${result}`);
    rl.close();
  });
});
