let postorder_index = -1

function construct_binary_tree_from_postorder_and_inorder_traversal(
	postorder_array, inorder_array
){

	postorder_index = postorder_array.length - 1

	let inorder_hashmap = {}
	inorder_array.map((tree_value, index) => inorder_hashmap[tree_value] = index )
	
	let inorder_left = 0
	let inorder_right = inorder_array.length - 1
	return build_tree(
		postorder_array, inorder_array, inorder_left, inorder_right, inorder_hashmap
	)
}

function build_tree(
	postorder_array, inorder_array, inorder_left, inorder_right, inorder_hashmap
){

	if (inorder_left > inorder_right) return null

	let current_node_value = postorder_array[postorder_index]
	
	let inorder_current_index = inorder_hashmap[current_node_value]
	
	postorder_index -= 1

	let current_node = new TreeNode(current_node_value)

	// move left pointer inwards in inorder array
	current_node.right = build_tree(
		postorder_array, inorder_array, inorder_current_index + 1, inorder_right, inorder_hashmap
	)

	// move right pointer inwards in inorder array
	current_node.left = build_tree(
		postorder_array, inorder_array, inorder_left, inorder_current_index - 1, inorder_hashmap
	)

	return current_node

}


function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}


let postorder_array = [1, 5, 4, 8, 9, 7]
let inorder_array   = [1, 4, 5, 7, 8, 9]

construct_binary_tree_from_postorder_and_inorder_traversal(postorder_array, inorder_array)