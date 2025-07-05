function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}

function unique_binary_search_trees_ii(n){
	return build_trees(1, n)	
}

function build_trees(left_value, right_value){
	let result = []

	if (left_value > right_value){
		result.push(null)
		return result
	}

	for (let current_value = left_value; current_value <= right_value; current_value++){
		
		let left_subtrees = build_trees(left_value, current_value - 1)
		let right_subtrees = build_trees(current_value + 1, right_value)

		for (let l = 0; l < left_subtrees.length; l++){
			for (let r = 0; r < right_subtrees.length; r++){
				let root_node = new TreeNode(current_value)
				root_node.left = left_subtrees[l]
				root_node.right = right_subtrees[r]
				result.push(root_node)
			}
		}
	}
	return result
}


console.log(unique_binary_search_trees_ii(3))