function longest_palindromic_subsequence_backtracking(str){
	let i = 0, j = str.length - 1
	let memo = {}
	return dfs(str, i, j, memo)
}

function dfs(str, i, j, memo){

	if (i > j) return 0
	if (i == j) return 1

	let memo_key = "(" + String(i) + ", " + String(j) + ")"
	if (memo[memo_key] != undefined) return memo[memo_key]

	let palindromic_subsequence_length = 0

	if (str[i] == str[j]){
		palindromic_subsequence_length = 2 + dfs(str, i + 1, j - 1, memo)
	} else {
		let left_child = dfs(str, i + 1, j, memo)
	}

	memo[memo_key] = palindromic_subsequence_length
	return memo[memo_key]
}

console.log(longest_palindromic_subsequence_backtracking("bbbcb") == 4)
console.log(longest_palindromic_subsequence_backtracking("bbbb") == 4)
console.log(longest_palindromic_subsequence_backtracking("abbxyzbb") == 5)
console.log(longest_palindromic_subsequence_backtracking("bbxyxbb") == 7)


function longest_palindromic_subsequence(str){
	let n = str.length
	let dp = new Array(n).fill().map(() => new Array(n).fill(0)) // matrix
	for (let i = n - 1; i >= 0; i--){
		dp[i][i] = 1
		for (let j = i + 1; j < n; j++){
			if (str[i] == str[j]){
				dp[i][j] = dp[i + 1][j - 1] + 2
			} else {
				dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
			}
		}
	}
	return dp[0][n - 1] || 0
}

console.log(longest_palindromic_subsequence("bbbcb") == 4)
console.log(longest_palindromic_subsequence("bbbb") == 4)
console.log(longest_palindromic_subsequence("abbxyzbb") == 5)
console.log(longest_palindromic_subsequence("bbxyxbb") == 7)