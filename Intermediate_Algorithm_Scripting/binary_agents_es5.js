function binaryAgent(str) {
  str = str.split(" ");
  var uniString = [];

  for(var i=0;i < str.length;i++){
    uniString.push(String.fromCharCode(parseInt(str[i], 2)));
  }

  return uniString.join("");
}
