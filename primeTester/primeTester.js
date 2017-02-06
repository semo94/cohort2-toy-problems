/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
var primeTester = function(n) {
	for (var i = n-1; i >= 2; i--) {
		if(n%i===0){
			return false;
		}
	}
	return true;
}

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */
// trying to implement Sieve of Eratosthenes algorithm // not correct yet
var primeRange = function(bound){
	var array = [];
	var result = [];
	for (var i = 2; i <= bound; i++) {
		array[i] = true;
	}
	for (var i = 2; i <= Math.floor(Math.sqrt(bound)); i++) {
		if(array[i]){
			var cnt =1;
			for (var j = Math.pow(i,2); j <= bound;  j = Math.pow(i,2) + (cnt*i)) {
				array[j] = false;
				cnt+=1;
			}
		}
	}
	for (var i = 0; i < array.length; i++) {
		if(array[i]){
			result.push(i);
		}
	}
	return result;
}


 //   Input: an integer n > 1.
 
 // Let A be an array of Boolean values, indexed by integers 2 to n,
 // initially all set to true.
 
 // for i = 2, 3, 4, ..., not exceeding √n:
 //   if A[i] is true:
 //     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
 //       A[j] := false.
 
 // Output: all i such that A[i] is true.