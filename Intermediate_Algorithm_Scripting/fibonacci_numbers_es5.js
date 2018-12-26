function sumFibs(num) {
  var previousFibo = 1;
  var currentFibo = 1;
  // hodler value to switch the values can be handled with ES6's [] = []
  var holderValue = 0;
  var totalOdds = 1;
  // while its bigger than current
  while(num >= currentFibo) {
    // set the holder value to the currentFibo
    holderValue = currentFibo;
    // set the new currentFibo by summing previous and the current
    currentFibo = currentFibo + previousFibo;
    // set the previousFibo by assigning holderValues value
    previousFibo = holderValue;
    // if it is odd
    if(previousFibo % 2 !== 0) {
      totalOdds += previousFibo;
    }
  }
  return totalOdds; 
}
