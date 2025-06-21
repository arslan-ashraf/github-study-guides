function n_queens(n){
	let row_str = ".".repeat(n)
	let result = [], temp_board = new Array(n)
	let board = []
	backtrack(result, board, temp_board, row_str, 0)
	return result
}

function backtrack(result, board, temp_board, row_str, current_row_index){
	if (current_row_index == temp_board.length){
		result.push([...board])
		return
	}
	for(let queen_position = 0; queen_position < temp_board.length; queen_position++){
		temp_board[current_row_index] = queen_position
		if (is_valid_position(temp_board, current_row_index)){
			let row_with_queen = row_str.slice(0, queen_position) + "Q" + row_str.slice(queen_position + 1)
			board.push(row_with_queen)
			backtrack(result, board, temp_board, row_str, current_row_index + 1)
			board.pop()
		}
	}
}

function is_valid_position(temp_board, current_row_index){
	for(let row_index = 0; row_index < current_row_index; row_index++){
		
		let diagonal_queen_placement = Math.abs(temp_board[row_index] - temp_board[current_row_index])
		let diagonal_position_difference = Math.abs(row_index - current_row_index)
		
		if (temp_board[row_index] == temp_board[current_row_index] ||	// vertical attack
			diagonal_queen_placement == diagonal_position_difference){	// diagnoal attack
				return false 
			}
	}
	return true 
}