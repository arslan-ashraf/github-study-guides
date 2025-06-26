// backtracking
function unique_ways_ii_backtrack(matrix){
	let n = matrix.length, m = matrix[0].length
	let total_count = [0]
	dfs(matrix, n - 1, m - 1, total_count, 0, 0)
	return total_count[0]
}

function dfs(matrix, n, m, total_count, current_row, current_column){
	if (current_row > n || current_column > m ||
		matrix[current_row][current_column] == 1){
		return
	} else if (current_row == n && current_column == m){
		let count = [Number(total_count.pop())]
		count[0] += 1
		total_count.push(...count)
	} else {
		dfs(matrix, n, m, total_count, current_row, current_column + 1)
		dfs(matrix, n, m, total_count, current_row + 1, current_column)
	}
}


let matrix = [
	[0, 0, 0, 0, 0],
	[0, 1, 0, 1, 0],
	[0, 0, 0, 0, 0]
]

console.log(unique_ways_ii_backtrack(matrix))


