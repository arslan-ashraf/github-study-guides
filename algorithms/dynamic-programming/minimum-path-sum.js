function minimum_path_sum_backtracking(matrix){
	let n = matrix.length, m = matrix[0].length
	return dfs(matrix, n - 1, m - 1, 0, 0)
}

function dfs(matrix, n, m, current_row, current_column){
	if (current_row > n || current_column > m){
		return 2**31
	} else if (current_row == n && current_column == m){
		return matrix[current_row][current_column]
	} else {
		let right_traversal = dfs(matrix, n, m, current_row, current_column + 1)
		let down_traversal = dfs(matrix, n, m, current_row + 1, current_column)
		return Math.min(right_traversal, down_traversal) + matrix[current_row][current_column]
	}
}

let matrix1 = [
	[1, 3, 3],
	[1, 5, 4],
	[4, 3, 1],
]

let matrix = [
	[1, 3, 3, 1, 8],
	[1, 5, 4, 4, 3],
	[4, 3, 1, 2, 1],
	[2, 2, 7, 3, 1]
]

console.log(minimum_path_sum_backtracking(matrix1) == 10)
console.log(minimum_path_sum_backtracking(matrix) == 14)


function minimum_path_sum_dp(matrix){
	let n = matrix.length, m = matrix[0].length
	let dp = new Array(n).fill().map(() => new Array())
	dp[0][0] = matrix[0][0]
	for (let i = 1; i < n; i++){ dp[i][0] = dp[i - 1][0] + matrix[i][0] }
	for (let j = 1; j < m; j++){ dp[0][j] = dp[0][j - 1] + matrix[0][j] }
	
	for (let i = 1; i < n; i++){
		for (let j = 1; j < m; j++){
			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j]
		}
	}

	// console.log(dp)
	return dp[n - 1][m - 1]
}

console.log(minimum_path_sum_dp(matrix1) == 10)
console.log(minimum_path_sum_dp(matrix) == 14)