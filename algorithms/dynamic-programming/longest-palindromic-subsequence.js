function longest_palindromic_subsequence(str){
	let dp = new Array(str.length).fill().map(() => new Array(str.length)) // matrix
	for (let i = str.length - 1; i >= 0; i--){
		dp[i][j] = 1
		for (let j = i + 1; j < str.length; j++){
			if (str[i] == str[j]){
				dp[i][j] = dp[i+1][j-1] + 2
			} else {
				dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
			}
		}
	}
	return dp[0][str.length-1]
}