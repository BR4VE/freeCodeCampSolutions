function recursive(arr, element) {
  // find the index of the element
  var indexOfElement = arr.indexOf(element);
  if(indexOfElement >= 0) {
    // if it exists remove it and call the func again
    arr.splice(indexOfElement, 1);
    recursive(arr,element);
  }
}

function destroyer(arr) {
  // turn arguments in to an array
  var gonnaSeek = Array.prototype.slice.call(arguments,"");
  var gonnaDestroy = gonnaSeek.splice(0,1)[0];
  // loop through gonnaDestroy
  gonnaSeek.forEach(function(element) {
    recursive(gonnaDestroy, element);
  });
  return gonnaDestroy;
}
