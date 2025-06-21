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