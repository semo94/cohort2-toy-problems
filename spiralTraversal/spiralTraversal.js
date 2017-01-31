/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var result = [];
	var left,right,top,bottom;
	left = 0; top = 0;
	right = matrix[0].length-1;
	bottom = matrix.length-1;
	// while(){
		for (var i = left; i <= right; i++) {
			result.push(matrix[left][i]);
		}
		top+=1;

		for (var i = top ; i <= bottom; i++) {
			result.push(matrix[i][bottom]);
		}
		right-=1;

		for (var i = right; i >= left; i--) {
			result.push(matrix[bottom][i]);
		}
		bottom-=1;

		for (var i = bottom; i >= top ; i--) {
			result.push(matrix[i][top]);
		}
		left+=1;
	// }
	return result;

};