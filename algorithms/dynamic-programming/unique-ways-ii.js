function unique_ways_ii_backtracking(matrix){
	let n = matrix.length, m = matrix[0].length
	return dfs(matrix, n - 1, m - 1, 0, 0)
}

function dfs(matrix, n, m, current_row, current_column){
	if (current_row > n || current_column > m ||
		matrix[current_row][current_column] == 1){
		return 0
	} else if (current_row == n && current_column == m){
		return 1
	} else {
		let right_traversal = dfs(matrix, n, m, current_row, current_column + 1)
		let down_traversal = dfs(matrix, n, m, current_row + 1, current_column)
		return right_traversal + down_traversal
	}
}


let matrix = [
	[0, 0, 0, 0, 0],
	[0, 1, 0, 1, 0],
	[0, 0, 0, 0, 0]
]

console.log(unique_ways_ii_backtracking(matrix) == 3)


function unique_ways_ii_dp(matrix){
	if (matrix[0][0] == 1) return 0
	let n = matrix.length, m = matrix[0].length
	let dp = new Array(n).fill().map(() => new Array())
	dp[0][0] = 1

	for (let i = 1; i < n; i++){
		if (matrix[i][0] == 1 || dp[i - 1][0] == 0){ // obstacle
			dp[i][0] = 0
		} else {
			dp[i][0] = 1
		}
	}

	for (let j = 1; j < m; j++){
		if (matrix[0][j] == 1 || dp[0][j - 1] == 0){ // obstacle
			dp[0][j] = 0
		} else {
			dp[0][j] = 1
		}		
	}

	for (let i = 1; i < n; i++){
		for(let j = 1; j < m; j++){
			if (matrix[i][j] == 0){
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
			} else {
				dp[i][j] = 0
			}
		}
	}
	// console.log(dp)
	return dp[n - 1][m - 1]
}

console.log(unique_ways_ii_dp(matrix) == 3)