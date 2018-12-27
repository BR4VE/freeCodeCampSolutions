function addTogether() {
  // define one in order to use the clousure
  var one = arguments[0];
  // if the first is not a number return
  if(typeof one !== "number") return;
  // if the second is not a number return
  if(arguments[1] && typeof arguments[1] !== "number") return;
  // if the second is a number, sum one and two
  if(typeof arguments[1] === "number") return arguments[0] + arguments[1];
  // if second is not provided return a function with power of closure
  return function(num) {
    if(typeof num !== "number") return;
    return num + one;
  }
}
