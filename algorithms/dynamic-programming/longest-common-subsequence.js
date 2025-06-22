function longest_common_subsequence(str_a, str_b){
	let n = str_a.length
	let m = str_b.length
	let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0))
	for(let i = 1; i <= n; i++){
		for(let j = 1; j <= m; j++){
			if (str_a[i - 1] == str_b[j - 1]){
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}
	return dp[n][m]
}