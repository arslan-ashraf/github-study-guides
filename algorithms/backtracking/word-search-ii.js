function word_search(matrix, target_words){

	let trie = build_trie(target_words)
	let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]] // up, right, down, left
	let result = []

	for (let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix[0].length; j++){

			let character = matrix[i][j]
			let character_index = character.charCodeAt() - "a".charCodeAt()
			let current_child_node = trie.child_nodes[character_index]

			if (current_child_node != undefined){
				dfs(matrix, current_child_node, directions, i, j, result)
			}
		}
	}
	return result
}

function dfs(matrix, trie_node, directions, current_row, current_column, result){
	
	if (trie_node.word != null) result.push(trie_node.word)

	let current_character = matrix[current_row][current_column]
	matrix[current_row][current_column] = "!"
	
	for(let i = 0; i < directions.length; i++){
		let new_row = current_row + directions[i][0]
		let new_column = current_column + directions[i][1]

		if (new_row >= 0 && new_row < matrix.length && // ensure we're within matrix
			new_column >= 0 && new_column < matrix[0].length){

			let next_character = matrix[new_row][new_column]
			let next_character_index = next_character.charCodeAt() - "a".charCodeAt()
			let next_child_node = trie_node.child_nodes[next_character_index]
			
			if (next_child_node != undefined){
				dfs(matrix, next_child_node, directions, new_row, new_column, result)
			}
			
		}
	}

	matrix[current_row][current_column] = current_character
	return
}

function TrieNode(){
	this.child_nodes = new Array(26)
	this.word = null // stores the whole word once we reach the last letter of a word
}

function build_trie(target_words){
	let root_node = new TrieNode()

	for (let i = 0; i < target_words.length; i++){
		
		let current_trie_node = root_node
		for (let w = 0; w < target_words[i].length; w++){

			let character = target_words[i][w]
			let character_index = character.charCodeAt() - "a".charCodeAt()

			if (current_trie_node.child_nodes[character_index] == undefined){
				current_trie_node.child_nodes[character_index] = new TrieNode()
			}

			current_trie_node = current_trie_node.child_nodes[character_index]
		}

		current_trie_node.word = target_words[i]
	}
	return root_node
}

let matrix = [
	['h', 'c', 'r', 'e', 'c'],
	['c', 'a', 'e', 'a', 'd'],
	['y', 't', 'e', 'a', 'b'],
	['o', 'i', 'n', 'l', 'l'],
	['u', 'p', 'g', 'v', 'f'],
]


// should return ["ping", "pine", "pita"]
console.log(word_search(matrix, ["ping", "zoo", "pine", "pita"]))