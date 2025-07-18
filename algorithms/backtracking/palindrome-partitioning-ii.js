function palindrome_partitioning_ii(str){
	
	let n = str.length
	if (n == 0) return 0

	// part 1, calculate the is substring palindromic
	is_substring_palindrome_dp = new Array(n).fill().map(() => new Array(n).fill(true))
	
	for (let i = n - 1; i >= 0; i--){
		for (let j = i + 1; j < n; j++){
			if (str[i] == str[j]){
				is_substring_palindrome_dp[i][j] = is_substring_palindrome_dp[i + 1][j - 1]
			} else {
				is_substring_palindrome_dp[i][j] = false
			}
		}
	}

	// part 2
	let minimum_cut_count = new Array(n)
	for (let i = 0; i < n; i++){ minimum_cut_count[i] = i }

	for (let column = 1; column < n; column++){
		for (let row = 0; row <= column; row++){

			// is substring from row index to column index palindromic
			if (is_substring_palindrome_dp[row][column]){ 
				if (row == 0){
					minimum_cut_count[column] = 0
				} else {
					minimum_cut_count[column] = Math.min(minimum_cut_count[column], 
													  	 minimum_cut_count[row - 1] + 1)
				}
			}

		}
	}

	console.log(is_substring_palindrome_dp)
	console.log(minimum_cut_count)
	return minimum_cut_count[n - 1]

}

console.log(palindrome_partitioning_ii("xbaabacax"))