function minimum_path_sum_backtracking(matrix){
	let n = matrix.length, m = matrix[0].length
	let minimum_sum = [2**31]
	dfs(matrix, n - 1, m - 1, minimum_sum, 0, 0, 0)
	return minimum_sum[0]
}

function dfs(matrix, n, m, minimum_sum, temp_sum, current_row, current_column){
	if (current_row > n || current_column > m){
		return
	} else if (current_row == n && current_column == m){
		let _minimum_sum = Number(minimum_sum.pop())
		_minimum_sum = [Math.min(_minimum_sum, temp_sum + matrix[n][m])]
		minimum_sum.push(..._minimum_sum)
	} else {
		let _temp_sum = temp_sum + matrix[current_row][current_column]
		dfs(matrix, n, m, minimum_sum, _temp_sum, current_row, current_column + 1)
		dfs(matrix, n, m, minimum_sum, _temp_sum, current_row + 1, current_column)
	}
}

let matrix = [
	[1, 3, 3, 1, 8],
	[1, 5, 4, 4, 3],
	[4, 3, 1, 2, 1],
	[2, 2, 7, 3, 1]
]

let matrix1 = [
	[1, 3, 3],
	[1, 5, 4],
	[4, 3, 1],
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