function longest_common_subsequence_backtracking(str_a, str_b){
	let result = backtrack(str_a, str_b, {}, 0, 0)
	return result
}

function backtrack(str_a, str_b, cache, i, j){
	
	let cache_key = String(i) + "," + String(j)
	if (cache[cache_key]) return cache[cache_key]

	if (i == str_a.length || j == str_b.length) return 0

	if (str_a[i] == str_b[j]){	

		let remaining_subsequence_match = backtrack(str_a, str_b, cache, i + 1, j + 1)
		cache[cache_key] = remaining_subsequence_match + 1
		
		return remaining_subsequence_match + 1

	} else {

		let left_remaining_match = backtrack(str_a, str_b, cache, i + 1, j)
		let right_remaining_match = backtrack(str_a, str_b, cache, i, j + 1)
		let largest_matching = Math.max(left_remaining_match, right_remaining_match)
		
		cache[cache_key] = largest_matching
		return largest_matching

	}

}

console.log(longest_common_subsequence_backtracking("abcde", "ace") == 3)
console.log(longest_common_subsequence_backtracking("abcdefg", "acxeyg") == 4)
console.log(longest_common_subsequence_backtracking("abcdefghisj", "acdesxj") == 6)


function longest_common_subsequence_dp(str_a, str_b){
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

console.log(longest_common_subsequence_dp("abcde", "ace") == 3)
console.log(longest_common_subsequence_dp("abcdefg", "acxeyg") == 4)
console.log(longest_common_subsequence_dp("abcdefghisj", "acdesxj") == 6)