function recursive(element, holder) {
  // if the element is an array
  if(Array.isArray(element)) {
    element.forEach(function(mini) {
      recursive(mini, holder);
    });
  }
  else {
    holder.push(element);
  }
}

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var holder = [];
  arr.forEach(function(element) {
    recursive(element, holder);
  })
  return holder;
}
