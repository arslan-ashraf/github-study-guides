// backtracking
function unique_ways_backtrack(n, k){
	let total_count = [0]
	dfs(n, k, total_count, 1, 1)
	return total_count[0]
}

function dfs(n, k, total_count, current_row, current_column){
	if (current_column > k || current_row > n){
		return
	} else if (current_row == n && current_column == k){
		let count = [Number(total_count.pop())]
		count[0] += 1
		total_count.push(...count)
	} else {
		dfs(n, k, total_count, current_row, current_column + 1)
		dfs(n, k, total_count, current_row + 1, current_column)
	} 
}

console.log(unique_ways_backtrack(3, 3) == 6)
console.log(unique_ways_backtrack(3, 7) == 28)
console.log(unique_ways_backtrack(7, 3) == 28)
console.log(unique_ways_backtrack(3, 4) == 10)


function unique_ways_dp(n, k){
	let dp = new Array(n).fill().map(() => new Array(k))

	dp[0][0] = 0
	for (let i = 0; i < n; i++){ dp[i][0] = 1 }
	for (let j = 0; j < k; j++){ dp[0][j] = 1 }

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