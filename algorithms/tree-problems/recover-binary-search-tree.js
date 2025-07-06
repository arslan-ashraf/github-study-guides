function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}

function recover_binary_search_tree(tree_node){
	let first_faulty_node = null
	let second_faulty_node = null
	let previous_node = new TreeNode(-1/0)

	in_order_recovery(tree_node, first_faulty_node, second_faulty_node, previous_node)

	let temp = first_faulty_node.value
	first_faulty_node.value = second_faulty_node.value
	second_faulty_node.value = temp
}

function in_order_recovery(tree_node, first_faulty_node, second_faulty_node, previous_node){

	if (tree_node == null) return

	console.log(`tree_node.value: ${tree_node.value}, previous_node.value: ${previous_node.value}`)
	in_order_recovery(tree_node.left, first_faulty_node, second_faulty_node, previous_node)

	// find first faulty node
	if (first_faulty_node == null && previous_node.value >= tree_node.value){
		first_faulty_node = previous_node
	}

	// find second faulty node
	if (first_faulty_node != null && previous_node.value >= tree_node.value){
		second_faulty_node = tree_node
	}

	previous_node = tree_node

	in_order_recovery(tree_node.right, first_faulty_node, second_faulty_node, previous_node)
}


let one = new TreeNode(1)
let five = new TreeNode(5)
let six = new TreeNode(6)
let seven = new TreeNode(7)
let eight = new TreeNode(8)
let nine = new TreeNode(9)

seven.left = five
seven.right = one

five.left = nine
five.right = six

one.left = eight

function in_order_traversal(tree){
	let result = []
	dfs(tree, result)
	return result
}

function dfs(tree, result){
	if (tree == null) return
	dfs(tree.left, result)
	result.push(tree.value)
	dfs(tree.right, result)
}

in_order_traversal(seven) // returns [9, 5, 6, 7, 8, 1] with 9 and 1 swapped

recover_binary_search_tree(seven)

in_order_traversal(seven)