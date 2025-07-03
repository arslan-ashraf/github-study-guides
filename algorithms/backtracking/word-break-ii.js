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
		result.push(temp_str.trim())
	}
	for (let right_index = left_index; right_index < str.length; right_index++){
		let left_substring = str.substring(left_index, right_index + 1)
		if (word_set.has(left_substring)){
			dfs(str, word_set, right_index + 1, result, temp_str + " " + left_substring)
		}
	}
}


// should return: [
// 		"down load sand work shop", "down load sand workshop",
// 		"down loads and work shop", "down loads and workshop",
// 		"download sand work shop", "download sand workshop",
// 		"downloads and work shop", "downloads and workshop"
// ]
console.log(
	word_break_ii(
		"downloadsandworkshop", 
		["down", "load", "loads", "download", "downloads", "and", "sand", "work", "shop", "workshop"]
	)
)