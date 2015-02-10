function myDopeFunction(a, b) {
  var x = myAwesomeFunction(4, 3);
  var y = myReallyAwesomeFunction(4, 3);
  
  var nums = [];

  for (var i = 0; i < 10; i++) {
    nums[i] = function (j) {
      return i + j;
    };
  }
  
  nums[0](2); // Prints 12 instead of 2
  
  return a * b;
}
