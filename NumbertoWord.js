function numberToWord(num) {
    const words = [
      'Zero', 'One', 'Two', 'Three', 'Four', 
      'Five', 'Six', 'Seven', 'Eight', 'Nine'
    ];
  
    if (num >= 0 && num <= 9) {
      return words[num];
    } else {
      return 'Invalid input. Please enter a single digit number.';
    }
  }
  
  const number = 5;
  console.log(numberToWord(number));
  