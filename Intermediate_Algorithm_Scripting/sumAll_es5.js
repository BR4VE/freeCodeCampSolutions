function sumAll(arr) {
  var numbersAmount = arr[0] - arr[1];
  // make it possitive
  numbersAmount = numbersAmount < 0 ? -1 * numbersAmount + 1 : numbersAmount + 1;
  return (arr[0] + arr[1]) * numbersAmount / 2;  
}