function edit_distance_between_strings_backtracking(string, pattern){
	return backtracking(string, pattern, {}, 0, 0)
}

function backtracking(string, pattern, memo, i, j){
	let cache_key = String(i) + "," + String(j)
	if (memo[cache_key] != undefined) return memo[cache_key]
	if (i == string.length && j == pattern.length) return 0
	if (i == string.length && j < pattern.length) return pattern.length - j
	if (i < string.length && j == pattern.length) return string.length - i

	if (string[i] == pattern[j]){
		let matched_character = backtracking(string, pattern, memo, i + 1, j + 1)
		memo[cache_key] = matched_character
		return matched_character
	} else {

		let modify_character = backtracking(string, pattern, memo, i + 1, j + 1)

		let delete_character = backtracking(string, pattern, memo, i + 1, j)
		
		let insert_character = backtracking(string, pattern, memo, i, j + 1)

		let minimum_edit_distance = Math.min(modify_character, delete_character, insert_character) + 1
		
		memo[cache_key] = minimum_edit_distance
		return minimum_edit_distance
	}
}

console.log(edit_distance_between_strings_backtracking("cat", "bag") == 2)
console.log(edit_distance_between_strings_backtracking("horse", "ses") == 4)


function edit_distance_between_strings_dp(string, pattern){
	let n = string.length, m = pattern.length
	let dp = new Array(n + 1).fill().map(() => new Array())
	dp[0][0] = 0
	for(let i = 1; i <= n; i++){ dp[i][0] = i }
	for(let j = 1; j <= m; j++){ dp[0][j] = j }

	for(let i = 1; i <= n; i++){
		for(let j = 1; j <= m; j++){
			if (string[i - 1] == pattern[j - 1]){
				dp[i][j] = dp[i - 1][j - 1]
			} else {
				dp[i][j] = 1 + Math.min(dp[i - 1][j - 1],
										dp[i][j - 1],
										dp[i - 1][j])
			}
		}
	}
	// console.log(dp)
	return dp[n][m]
}

console.log(edit_distance_between_strings_dp("cat", "bag") == 2)
console.log(edit_distance_between_strings_dp("horse", "ses") == 4)
console.log(edit_distance_between_strings_dp("ses", "horse") == 4)