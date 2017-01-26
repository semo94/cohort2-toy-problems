/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target, midPoint) {
		var midPoint = midPoint || Math.floor(array.length/2);
		if(array[midPoint] === target){
			return midPoint;
		}
		else if(midPoint === 0 || midPoint === array.length-1){
			return "not found";
		}
		else{
			if(target > array[midPoint]){
				midPoint = Math.ceil( ( midPoint + (array.length-1) ) /2 );
			}else{
				midPoint = Math.floor(midPoint/2);
			}
			return binarySearch(array,target,midPoint)
		}
};

