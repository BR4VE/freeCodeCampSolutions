function uniteUnique(arr) {
  // arguments object to array
  var fakeArguments = Array.prototype.slice.call(arguments, "");
  var returnedArr = [];
  // loop through arguments
  fakeArguments.forEach(function(arr) {
    // loop through elements in each array
    arr.forEach(function(element) {
      if(returnedArr.indexOf(element) < 0) {
        returnedArr.push(element);
      }
    });
  });
  return returnedArr;
}
