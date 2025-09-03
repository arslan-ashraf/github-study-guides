function palindrome_partitioning_ii(str){
	
	let n = str.length
	if (n == 0) return 0

	// part 1, pre-calculate the is_substring_palindromic_cache matrix
	// we only need the top left of matrix, ignore bottom left below the diagonal
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

	// base case, if each letter is unique, then we require n - 1 cuts
	for (let i = 0; i < n; i++){ minimum_cut_count[i] = i /* base case */ }

	// in the matrix, for each column, we go down the rows only up to the diagonal which is also
	// the current column index as the matrix below the diagonal is meaningless
	for (let right = 1; right < n; right++){
		for (let left = 0; left <= right; left++){

			// is substring from left to right pointers palindromic
			if (is_substring_palindrome_cache[left][right]){ 

				// substring from left=0 to right is palindromic
				if (left == 0){ 
					minimum_cut_count[right] = 0 // so 0 cuts are needed
				} else {
					// since substring from left to right is palindromic,
					// we take minimum of what's on the left ([left - 1] + 1)
					// and whatever is currently at the right index
					minimum_cut_count[right] = Math.min(minimum_cut_count[right], 
														minimum_cut_count[left - 1] + 1)
				}

			}

			// if substring is not palindromic, then we need right - left + 1 cuts
			// but that's already covered by the base case above

		}
	}

	console.log(is_substring_palindrome_cache)
	console.log(minimum_cut_count)
	return minimum_cut_count[n - 1]

}

console.log(palindrome_partitioning_ii("xbaabacax"))