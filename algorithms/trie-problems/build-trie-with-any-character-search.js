function TrieNode(){
	this.child_nodes = new Array(26)
	this.is_word = false
}


class Trie {
	constructor(){
		this.root_node = new TrieNode()
	}

	insert_word(word){
		let current_trie_node = this.root_node
		for (let i = 0; i < word.length; i++){
			let character = word[i]
			let character_index = character.charCodeAt() - "a".charCodeAt()
			if (current_trie_node.child_nodes[character_index] == undefined){
				current_trie_node.child_nodes[character_index] = new TrieNode()
			}
			current_trie_node = current_trie_node.child_nodes[character_index]
		}
		current_trie_node.is_word = true
	}

	search_word(word){
		let current_trie_node = this.root_node
		let word_index = 0
		return this.dfs(word, word_index, current_trie_node)
	}

	dfs(word, word_index, current_trie_node){
		if (word_index == word.length && current_trie_node.is_word == true) return true

		while (word_index < word.length){

			let character = word[word_index]
			let character_index = character.charCodeAt() - "a".charCodeAt()
			
			if (character == "."){
				
				for (let i = 0; i < current_trie_node.child_nodes.length; i++){
					let current_child_node = current_trie_node.child_nodes[i]
					if (current_child_node != undefined){
						let dfs_search = this.dfs(word, word_index + 1, current_child_node)
						if (dfs_search == true) return true
					}
				}

			} else if (current_trie_node.child_nodes[character_index] != undefined){
				current_trie_node = current_trie_node.child_nodes[character_index]
			} else {
				return false
			}
			
			word_index += 1
		}
		return current_trie_node.is_word == true ? true : false
	}
}

let trie = new Trie()

trie.insert_word("bat")
trie.insert_word("ball")
trie.insert_word("ate")

console.log(trie.search_word("bat") == true)
console.log(trie.search_word(".at") == true)
console.log(trie.search_word(".a.") == true)
console.log(trie.search_word(".x.") == false)
console.log(trie.search_word("..e") == true)
console.log(trie.search_word("..ll") == true)
console.log(trie.search_word("..l") == false)
console.log(trie.search_word("ba..") == true)