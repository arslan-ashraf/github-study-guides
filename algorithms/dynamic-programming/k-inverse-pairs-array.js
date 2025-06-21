function k_inverse_pairs_array(n, k){
	let dp = new Array(n + 1).fill().map(() => new Array(k + 1).fill(0)) // matrix
	dp[0][0] = 1
	for (let i = 1; i <= n; i++){
		dp[i][0] = 1
		for (let j = 1; j <= k; j++){
			dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1e9 + 7
			if (j - i >= 0){
				dp[i][j] = (dp[i][j] - dp[i - 1][j - 1]) % 1e9 + 7
			}
		}
	}
	return dp[n][k]
}