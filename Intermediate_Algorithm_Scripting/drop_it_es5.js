function dropElements(arr, func) {
  var idx = null;
  for(var i = 0; i < arr.length; i++) {
   if(func(arr[i])) {
     idx = i;
     break;
   }
  }
  arr = idx !== null ? arr.splice(idx) : [];
 return arr;
}
