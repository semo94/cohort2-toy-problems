/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  board.findPaths = function(i,j) {
    var possiblePaths = [];
    if(i-1 >= 0){
      possiblePaths.push([i-1,j]);
    }
    if(i+1 < n){
      possiblePaths.push([i+1,j]);
    }
    if(j-1 >= 0){
      possiblePaths.push([i,j-1]);
    }
    if(j+1 < n){
      possiblePaths.push([i,j+1]);
    }
    return possiblePaths;
  }
  return board;
};

//You can create a board size 5 like this:
var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

var robotPaths = function(myBoard,pos) {
  var pos = pos || 0 ;
  var boardLength = myBoard.length;
  for (var i = 0; i < boardLength; i++) {
    for (var j = 0; j < boardLength; j++) {
      var possiblePaths = myBoard.findPaths(i,j);
      for (var p = 0; p < possiblePaths.length; p++) {
        if(myBoard.hasBeenVisited(possiblePaths[p][0],possiblePaths[p][1])){
          myBoard.togglePiece(possiblePaths[p][0],possiblePaths[p][1]);
          robotPaths(myBoard,pos);
        }
      }
    }
  }
  if(myBoard[boardLength-1][boardLength-1]){
    return pos;
  }
}












