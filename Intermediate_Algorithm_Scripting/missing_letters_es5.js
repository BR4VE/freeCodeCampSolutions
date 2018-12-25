function fearNotLetter(str) {
  var abc = "abcdefghijklmnopqrstuvwxyz";
  var missingLetter;
  // loop through str
  var first = abc.indexOf(str[0]);
  for(var i = 0; i < str.length; i++) {
    if(str[i] !== abc[first + i]) {
      missingLetter = abc[first + i];
      break;
    }
  }
  return missingLetter;
}
