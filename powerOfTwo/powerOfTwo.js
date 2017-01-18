/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	var result = 0;
	var powNum = Math.pow(2,num).toString();
	for (var i = 0; i < powNum.length; i++) {
		result+= parseInt(powNum[i]);
	}
	return result;
}