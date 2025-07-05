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

console.log(unique_binary_search_trees_memoized(5) == 42)