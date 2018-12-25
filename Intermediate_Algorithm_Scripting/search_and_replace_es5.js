function myReplace(str, before, after) {
  // check the uppercase
  // if the "before" starts with upper, make the first letter of "after" upper
  after = before[0] === before[0].toUpperCase() ? after[0].toUpperCase() + after.slice(1,after.length) : after;
  // then just replace the words
  str = str.replace(before, after);
  return str;
}
