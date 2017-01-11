/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  // Note: I know this is a trivial way to solve this problem and its not an optimal way, 
  //we should compares properties' projections recursively, and also compares constructors and take care of methods and DOM nodes inside our objects.
  var deepEquals = function(obj1, obj2, storage){

  	var str1 = JSON.stringify(obj1);
  	var str2 = JSON.stringify(obj2);
  	return str1=== str2;

  }