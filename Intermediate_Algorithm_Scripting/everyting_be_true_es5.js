function truthCheck(collection, pre) {
  // filter the collection
  var secondCollection = collection.filter(function(obj) {
    return obj.hasOwnProperty(pre) && obj[pre];
  });
  // return if the length of the second collection is equal to "collection"
  return secondCollection.length === collection.length ? true : false;
}
