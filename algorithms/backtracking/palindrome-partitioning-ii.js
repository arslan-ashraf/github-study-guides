function palindrome_partitioning_ii(str){
	
	// part 1, calculate the is substring palindromic
	is_substring_palindrome_dp = new Array(str.length).fill().map(() => new Array(str.length).fill(true))
	for (let i = str.length - 1; i >= 0; i--){
		for (let j = i + 1; j < str.length; j++){
			if (str[i] == str[j]){
				is_substring_palindrome_dp[i][j] = is_substring_palindrome_dp[i + 1][j - 1]
			} else {
				is_substring_palindrome_dp[i][j] = false
			}
		}
	}

	// part 2

	console.log(is_substring_palindrome_dp)
}

console.log(palindrome_partitioning_ii("xbaabacax"))