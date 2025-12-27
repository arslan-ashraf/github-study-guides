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

	// worst case, if each letter is unique, then we require n - 1 cuts
	for (let i = 0; i < n; i++){ minimum_cut_count[i] = i /* base case */ }

	// the matrix traversal here is column wise not row wise
	// for each column, we go down the rows but only up to the diagonal
	for (let right = 1; right < n; right++){
		for (let left = 0; left <= right; left++){

			// is substring between left and right indices palindromic
			if (is_substring_palindrome_cache[left][right]){ 

				// substring betweeen left=0 and right is palindromic
				if (left == 0){ 
					minimum_cut_count[right] = 0 // so 0 cuts are needed
					break 	// we cannot get any better so no point in checking a smaller substring
				} else {
					// since substring betweeen left and right indices is palindromic,
					// we take minimum of what's on the left and add 1, minimum_cut_count[left - 1] + 1
					// and whatever is currently at the right index, minimum_cut_count[right]
					minimum_cut_count[right] = Math.min(minimum_cut_count[left - 1] + 1,
														minimum_cut_count[right])
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