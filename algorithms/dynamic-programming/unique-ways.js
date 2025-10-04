function unique_ways_backtracking(n, k){
	return dfs(n, k, 1, 1)
}

function dfs(n, k, current_row, current_column){
	if (current_column > k || current_row > n){
		return 0
	} else if (current_row == n && current_column == k){
		return 1
	} else {
		let move_rightwards_num_ways = dfs(n, k, current_row, current_column + 1)
		let move_downwards_num_ways = dfs(n, k, current_row + 1, current_column)
		return move_rightwards_num_ways + move_downwards_num_ways
	} 
}

console.log(unique_ways_backtracking(3, 3) == 6)
console.log(unique_ways_backtracking(3, 7) == 28)
console.log(unique_ways_backtracking(7, 3) == 28)
console.log(unique_ways_backtracking(3, 4) == 10)


function unique_ways_dp(n, k){
	let dp = new Array(n).fill().map(() => new Array(k))

	dp[0][0] = 1
	for (let i = 1; i < n; i++){ dp[i][0] = 1 }
	for (let j = 1; j < k; j++){ dp[0][j] = 1 }

	for (let i = 1; i < n; i++){
		for(let j = 1; j < k; j++){
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
		}
	}
	// console.log(dp)
	return dp[n - 1][k - 1]
}


console.log(unique_ways_dp(3, 3) == 6)
console.log(unique_ways_dp(3, 7) == 28)
console.log(unique_ways_dp(7, 3) == 28)
console.log(unique_ways_dp(3, 4) == 10)