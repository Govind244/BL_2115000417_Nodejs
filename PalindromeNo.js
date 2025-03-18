function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;
    
    while (num > 0) {
      let digit = num % 10;
      reversedNum = reversedNum * 10 + digit;
      num = Math.floor(num / 10);
    }
  
    return originalNum === reversedNum;
  }
  
  function checkPalindromes(num1, num2) {
    return isPalindrome(num1) && isPalindrome(num2);
  }
  
  console.log(checkPalindromes(121, 133));  
  