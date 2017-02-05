/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	array = array.sort(function(a,b){
		return a - b;
	});
	left = array[0]*array[1];
	right = array[array.length-2] * array[array.length-3];
	if(array[array.length-1] < 0 || right > left){
		return array[length-1] * right;
	}
	else if( left >= right ){
		return left * array[array.length-1];
	}	
};




