function word_search(matrix, target){
	let n = matrix.length, m = matrix[0].length
	if (target.length > n * m) return false
	let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]] // up, right, down, left
	for (let i = 0; i < n; i++){
		for(let j = 0; j < m; j++){
			if (matrix[i][j] == target[0]){
				let word_found = dfs(matrix, target, 1, directions, i, j)
				if (word_found == true) return true
			}
		}
	}
	return false
}

function dfs(matrix, target, target_index, directions, current_row, current_column){
	
	if (target.length == target_index) return true

	let current_character = matrix[current_row][current_column]
	matrix[current_row][current_column] = "!"
	
	for(let i = 0; i < directions.length; i++){
		let new_row = current_row + directions[i][0]
		let new_column = current_column + directions[i][1]

		if (new_row >= 0 && new_row < matrix.length && // ensure we're within matrix
			new_column >= 0 && new_column < matrix[0].length &&
			matrix[new_row][new_column] == target[target_index]){

			let word_found = dfs(matrix, target, target_index + 1, directions, new_row, new_column)
			if (word_found == true) return true
		}
	}

	matrix[current_row][current_column] = current_character
	return false
}

let matrix = [
	['h', 'c', 'r', 'e', 'c'],
	['c', 'a', 'e', 'a', 'c'],
	['y', 't', 'e', 'a', 'b'],
	['o', 'i', 'n', 'l', 'l'],
	['u', 'p', 'g', 'v', 'f'],
]


// run these tests one at a time, if they're run simultaneously,
// the output is not guaranteed to be correct
console.log(word_search(matrix, "eating") == true)
console.log(word_search(matrix, "reach") == true)
console.log(word_search(matrix, "ball") == true)
console.log(word_search(matrix, "you") == true)
console.log(word_search(matrix, "read") == false)
console.log(word_search(matrix, "cats") == false)