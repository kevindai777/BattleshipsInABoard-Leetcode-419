//Objective is to count the number of battleships on a board

let board = 
[['X','.','.','X'],
 ['.','.','.','X'],
 ['.','.','.','X']

 
//O(nm) solution that checks each tile and it's sides
let count = 0
    
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        count += isShip(board, i, j) ? 1 : 0
    }
}

return count

//Check if the left and up sides are empty
function isShip(board, i, j) {
    if (board[i][j] == 'X') {
        return (i == 0 || board[i - 1][j] == '.') && (j == 0 || board[i][j - 1] == '.')
    }
    
    return false
}
