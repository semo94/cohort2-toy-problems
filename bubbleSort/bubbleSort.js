/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * More credits: Do you need to consider every element every time you iterate
 * through the array? Again: Has the time complexity of your algorithm changed?
*/

  var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed

var bubbleSort = function(array,n) {
	n = n || array.length;
	if(n===0){return array;}
	var flage = true;
	for (var i = 0; i < n; i++) {
		if(array[i]>array[i+1]){
			array = swap(array,i,i+1);
			flage = false;
		}
	}
	if(flage){return array;}
  	return bubbleSort(array,n-1);
};

var swap = function(array,pos1,pos2){
	var tmp = array[pos1];
	array[pos1] = array[pos2];
	array[pos2] = tmp;
	return array;
}

/*

// Remember to look here http://visualgo.net/sorting
*/