function unique_binary_search_trees(n){
	return dfs(n)
}

function dfs(n){
	if (n <= 1) return 1
	let result = 0
	for (let i = 1; i <= n; i++){
		result += dfs(i - 1) * dfs(n - i)
	}
	return result
}


console.log(unique_binary_search_trees(3) == 5)
console.log(unique_binary_search_trees(4) == 14)
console.log(unique_binary_search_trees(5) == 42)


function unique_binary_search_trees_memoized(n){
	let memo = {}
	return dfs_memoized(n, memo)
}

function dfs_memoized(n, memo){
	console.log(memo)
	if (n <= 1) return 1
	if (memo[n] != undefined) return memo[n]

	let result = 0
	for (let i = 1; i <= n; i++){
		result += dfs_memoized(i - 1, memo) * dfs_memoized(n - i, memo)
	}
	memo[n] = result
	return result
}

console.log(unique_binary_search_trees_memoized(3) == 5)
console.log(unique_binary_search_trees_memoized(4) == 14)
console.log(unique_binary_search_trees_memoized(5) == 42)



function unique_binary_search_trees_dp(n){
	let dp = new Array(n + 1).fill(0)
	dp[0] = 1
	dp[1] = 1

	for (let i = 2; i <= n; i++){
		for (let j = 1; j <= i; j++){
			dp[i] += dp[j - 1] * dp[i - j]
		}
	}

	console.log(dp)
	return dp[n]
}

console.log(unique_binary_search_trees_dp(3) == 5)
console.log(unique_binary_search_trees_dp(4) == 14)
console.log(unique_binary_search_trees_dp(5) == 42)