function n_queens_ii(n){
	let result = [0], temp_board = new Array(n)
	let board = []
	backtrack(result, board, temp_board, 0)
	return result[0][0] || 0
}

function backtrack(result, board, temp_board, current_row_index){
	if (current_row_index == temp_board.length){
		let previous_count = Number(result.pop())
		let new_count = [previous_count + 1]
		result.push([...new_count])
		return
	}
	for(let queen_position = 0; queen_position < temp_board.length; queen_position++){
		temp_board[current_row_index] = queen_position
		if (is_valid_position(temp_board, current_row_index)){
			board.push(queen_position)
			backtrack(result, board, temp_board, current_row_index + 1)
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