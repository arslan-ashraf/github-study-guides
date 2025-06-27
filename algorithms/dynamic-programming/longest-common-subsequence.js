function longest_common_subsequence_backtracking(str_a, str_b){
	let result = [0]
	backtrack(str_a, str_b, result, 0)
	return result[0]
}

function backtrack(str_a, str_b, result, common_length){
	if (str_a.length > 0 && str_b.length == 0 ||
		str_a.length == 0 && str_b.length > 0){
		return 0
	} else if (str_a.length == 0 && str_b.length == 0){
		let count = Number(result.pop())
		count = [Math.max(count, common_length)]
		result.push(...count)
	} else {
		if (str_a[0] == str_b[0]){	
			backtrack(str_a.substring(1), str_b.substring(1), result, common_length + 1)
		} else {
			backtrack(str_a.substring(1), str_b, result, common_length)
			backtrack(str_a, str_b.substring(1), result, common_length)
		}
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