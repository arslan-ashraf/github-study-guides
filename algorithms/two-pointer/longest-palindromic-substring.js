function longest_palindromic_substring(str){
	let left = 0
	let right = 0
	let left_palindrome_index = 0
	let maximum_palindrome_length = 0
	
	for(let i = 0; i < str.length; i++){

		// odd length palindrome
		left = i, right = i
		while (left >= 0 && right < str.length && str[left] == str[right]){
			if (right - left + 1 > maximum_palindrome_length){
				maximum_palindrome_length = right - left + 1
				left_palindrome_index = left
			}
			left -= 1
			right += 1
		}

		// even length palindrome
		left = i, right = i + 1
		while (left >= 0 && right < str.length && str[left] == str[right]){
			if (right - left + 1 > maximum_palindrome_length){
				maximum_palindrome_length = right - left + 1
				left_palindrome_index = left
			}
			left -= 1
				right += 1
		}

	}
	return str.substring(left_palindrome_index, left_palindrome_index + maximum_palindrome_length)
}

console.log(longest_palindromic_substring("abxyxcx") == "xyx")
console.log(longest_palindromic_substring("abxyyxcx") == "xyyx")