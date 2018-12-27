var Person = function(firstAndLast) {
  // do not write first and last name as object properties
  var firstName;
  var lastName;
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.setFullName = function(firstAndLast) {
    firstAndLast = firstAndLast.split(" ");
    firstName = firstAndLast[0];
    lastName = firstAndLast[1]; 
  };
  this.setFirstName = function(name) {
    firstName = name;
  }
  this.setLastName = function(name) {
    lastName = name;
  }
  this.setFullName(firstAndLast);
};
