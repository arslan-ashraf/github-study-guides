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


console.log(unique_binary_search_trees(3))