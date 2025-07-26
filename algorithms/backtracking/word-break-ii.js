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
			// implicit right_substring with right_index + 1
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



function word_break_ii_memoized(str, words){
	// for the memoized solution, result is redundant, we can just return memo[0]
	let result = []
	let left_index = 0
	let memo = {}
	let word_set = new Set()
	words.map((word) => word_set.add(word))

	dfs_memoized(str, word_set, left_index, result, "", memo)

	console.log(memo)
	return result
}

function dfs_memoized(str, word_set, left_index, result, temp_str, memo){
	if (memo[left_index] != undefined){
		// the loop is needed to combine all of the branches from the
		// current node (temp_str) to memoized nodes
		for(let i = 0; i < memo[left_index].length; i++){
			result.push((temp_str + " " + memo[left_index][i]).trim())
		}
		return
	}
	if (left_index == str.length){
		result.push(temp_str.trim())
	}
	for (let right_index = left_index; right_index < str.length; right_index++){
		let left_substring = str.substring(left_index, right_index + 1)
		if (word_set.has(left_substring)){
			// implicit right_substring with right_index + 1
			dfs_memoized(str, word_set, right_index + 1, result, temp_str + " " + left_substring, memo)
			
			// check if nodes further down the tree have already been memoized
			// if so, combine current string (left_substring) with previously memoized nodes
			if (memo[right_index + 1] != undefined){

				for (let i = 0; i < memo[right_index + 1].length; i++){
					if (memo[left_index] != undefined){
						memo[left_index].push((left_substring + " " + memo[right_index + 1][i]).trim())
					} else {
						memo[left_index] = [(left_substring + " " + memo[right_index + 1][i]).trim()]
					}
				}
				
			} else { // if not, memoize the bottom most leaf nodes

				if (memo[left_index] != undefined){
					memo[left_index].push((left_substring + " " + str.substring(right_index + 1)).trim())
				} else {
					memo[left_index] = [left_substring]
				}

			}

		}
	}
}


// the memo map should be
let _memo = { 
	0:  ['down load sand work shop', 'down load sand workshop ', 'down loads and work shop', 'down loads and workshop ', 'download sand work shop', 'download sand workshop ', 'downloads and work shop', 'downloads and workshop '],
	4:  ['load sand work shop', 'load sand workshop ', 'loads and work shop', 'loads and workshop '],
	8:  ['sand work shop', 'sand workshop '],
	9:  ['and work shop', 'and workshop '],
	12: ['work shop', 'workshop '],
	16: ['shop']
}

// should return: [
// 		"down load sand work shop", "down load sand workshop",
// 		"down loads and work shop", "down loads and workshop",
// 		"download sand work shop", "download sand workshop",
// 		"downloads and work shop", "downloads and workshop"
// ]

console.log(
	word_break_ii_memoized(
		"downloadsandworkshop", 
		["down", "load", "loads", "download", "downloads", "and", "sand", "work", "shop", "workshop"]
	)
)