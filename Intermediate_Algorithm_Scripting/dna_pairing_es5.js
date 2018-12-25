function pairElement(str) {
  // write the pairs
  var pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };
  var returnedArr = [];
  // Lopp through the string
  for(var i = 0; i < str.length; i++) {
    returnedArr.push([str[i], pairs[str[i]]]);
  }
  return returnedArr;
}
