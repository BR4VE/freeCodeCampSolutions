function isPrime(num) {
  /* Rule:
    - If a number can not be divied by numbers which are smaller than it's own root,
    - this number is a prime number (besides 1)
    
    Example:
    Root of 17 = 4.12
    17 cannot be divided by 4,3,2
    that means it is a prime number
  */
  var root = Math.floor(Math.sqrt(num));
  var dividable = false;
  // loop through numbers lower than root variable
  for(var i = 2; i <= root; i++) {
    if(num % i === 0) {
      dividable = true;
      // break to gain performance
      break;
    }
  }
  return !dividable;
}

function sumPrimes(num) {
  // loop through numbers lower(equal) than num higher than 1
  var total = 0;
  for(var i = 2; i <= num ; i++) {
    if(isPrime(i)) {
      total += i;
    }
  }
  return total;
}
