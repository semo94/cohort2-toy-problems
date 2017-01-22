/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
	var check = checkRows(board);
	if(check){
		return check;
	}
	check = checkColums(board);
	if(check){
		return check;
	}
	check = checkDiagonal(board);
	if(check){
		return check;
	}
	check = checkZeros(board);
	if(!check){
		return check;
	}
	return -1;
};

var checkRow = function(sub){
	if(sub.join("").split("1").length-1 === 3 || sub.split("2").length-1 === 3){
		return true;
	}
	return false;
}

var checkRows = function(board){
	var flage = false;
	board.forEach(function(sub){
		if(checkRow(sub)){
			flage = sub[0];
		}
	})
	return flage;
}

var checkColums = function(board){
	for (var i = 0; i < board.length; i++) {
		if((board[0][i] && board[1][i] && board[2][i]) === 1 ||
		   (board[0][i] && board[1][i] && board[2][i]) === 2){
			return board[0][i];
		}
	}
	return false;
}

var checkDiagonal = function(board){
	var check = checkMajor(board);
	if(check){
		return check;
	}
	check = checkMinor(board)
	if(check){
		return check;
	}
	return false;
}

var checkMajor = function(board){
	if(board[0][0] && board[1][1] && board[2][2] === 1 ||
	   board[0][0] && board[1][1] && board[2][2] === 2){
		return board[0][0];
	}
	return false;
}

var checkMinor = function(board){
	if(board[0][2] && board[1][1] && board[2][0] === 1 ||
	   board[0][2] && board[1][1] && board[2][0] === 2){
		return board[0][0];
	}
	return false;
}

var checkZeros = function(board){
	for (var i = 0; i < board.length; i++) {
		if(board[i].indexOf(0) > -1){
			return 1;
		}
	}
	return 0;
}