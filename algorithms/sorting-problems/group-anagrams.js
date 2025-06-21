function group_anagrams(words_array){
	let hash_map = new Map()
	let result = []
	words_array.map((word) => {
		let word_sorted = word.split("").sort().join("")
		if (hash_map[word_sorted]){
			hash_map[word_sorted].push(word)
		} else {
			hash_map[word_sorted] = [word]
		}
	})

	for (let key in hash_map){
		result.push(hash_map[key])
	}
	return result
}


let input = ["eat","tea","tan","ate","nat","bat"]
let output = [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(group_anagrams(input))







