function valid_sudoku(board) {
    for (let i = 0; i < 9; i++){

        let row = new Array(9).fill(false)
        let column = new Array(9).fill(false)
        let box = new Set()
        
        for(let j = 0; j < 9; j++){

            let row_number    = Number(board[i][j]) - 1
            let column_number = Number(board[j][i]) - 1

            let box_i = 3 * Math.floor(i/3) + Math.floor(j/3)
            let box_j = 3 * (i % 3) + (j % 3)

            if (board[box_i][box_j] != "." && box.has(board[box_i][box_j])) return false
            if (board[i][j]         != "." && row[row_number] == true) return false
            if (board[j][i]         != "." && column[column_number] == true) return false

            row[row_number] = true
            column[column_number] = true
            box.add(board[box_i][box_j])
            
        }
    }
    return true
}

let board1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

let board2 = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

console.log(valid_sudoku(board1) == true)
console.log(valid_sudoku(board2) == false)