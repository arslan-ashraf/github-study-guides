function word_break_ii(str, words){
	let result = []
	let left_index = 0
	let word_set = new Set()
	words.map((word) => word_set.add(word))

	dfs(str, word_set, left_index, result, "")

	return result
}

function dfs(str, word_set, left_index, result, temp_str){
	if (left_index == str.length){
		result.push(temp_str)
	}
	for (let right_index = left_index + 1; right_index < str.length; right_index++){
		let left_substring = str.substring(left_index, right_index)
		if (word_set.has(left_substring)){
			let right_substring = dfs(str, word_set, right_index, result, temp_str + left_substring)

		}
	}
}


// should return: [
// 		"down load sand work shop", "down load sand workshop",
// 		"dow"
// ]
console.log(
	word_break_ii(
		"downloadsandworkshop", 
		["down", "download", "downloads", "and", "sand", "work", "workshop"]
	)
)