function diffArray(arr1, arr2) {
  var newArr = [];
  // loop through the first arr
  arr1.forEach(function(element) {
    // if the second arr and newarr do not contain the element add it to the newArr
    if(arr2.indexOf(element) < 0 && newArr.indexOf(element) < 0) {
      newArr.push(element);
    }
  });
  // do same for the second array
  arr2.forEach(function(element) => {
    if(arr1.indexOf(element) < 0 && newArr.indexOf(element) < 0) {
      newArr.push(element);
    }
  });
  
  return newArr;
}