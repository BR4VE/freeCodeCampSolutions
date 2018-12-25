function whatIsInAName(collection, source) {
  var arr = [];
  // loop through collection
  arr = collection.filter(function(element) {
    var isMatching = true;
    // it is not the best practice using for..in loop without hasOwnProperty
    for(var key in source) {
      console.log(key);
      if(source[key] !== element[key]) {
        isMatching = false;
      } 
    }
    return isMatching;
  })
  
  // Only change code above this line
  return arr;
}
