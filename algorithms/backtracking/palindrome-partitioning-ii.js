function palindrome_partitioning_ii(str){
	
	let n = str.length
	if (n == 0) return 0

	// part 1, calculate the is substring palindromic
	// we only need the top left, ignore bottom left below the diagonal
	is_substring_palindrome_cache = new Array(n).fill().map(() => new Array(n).fill(true))
	
	for (let i = n - 1; i >= 0; i--){
		for (let j = i + 1; j < n; j++){
			if (str[i] == str[j]){
				is_substring_palindrome_cache[i][j] = is_substring_palindrome_cache[i + 1][j - 1]
			} else {
				is_substring_palindrome_cache[i][j] = false
			}
		}
	}

	// part 2, dynamic programming
	let minimum_cut_count = new Array(n)

	for (let i = 0; i < n; i++){ minimum_cut_count[i] = i }

	// for each column, we go down the rows only up to the current
	// column index as the matrix below the diagonal is meaningless
	for (let column = 1; column < n; column++){
		for (let row = 0; row <= column; row++){

			let i = column, j = row  		// for clarity

			// is substring from j to i palindromic
			if (is_substring_palindrome_cache[j][i]){ 

				if (j == 0){
					minimum_cut_count[i] = 0
				} else {
					minimum_cut_count[i] = Math.min(minimum_cut_count[i], 
													minimum_cut_count[j - 1] + 1)
				}

			}

		}
	}

	console.log(is_substring_palindrome_cache)
	console.log(minimum_cut_count)
	return minimum_cut_count[n - 1]

}

console.log(palindrome_partitioning_ii("xbaabacax"))