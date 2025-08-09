let first_faulty_node = null
let second_faulty_node = null
let previous_node = new TreeNode(-1/0)

function recover_binary_search_tree(tree_node){
	
	in_order_recovery(tree_node)

	let temp = first_faulty_node.value
	first_faulty_node.value = second_faulty_node.value
	second_faulty_node.value = temp
}

function in_order_recovery(tree_node){

	if (tree_node == null) return

	console.log(`tree_node.value: ${tree_node.value}, previous_node.value: ${previous_node.value}`)
	in_order_recovery(tree_node.left)

	// find first faulty node
	if (first_faulty_node == null && previous_node.value >= tree_node.value){
		first_faulty_node = previous_node
		console.log(`first_faulty_node: `, first_faulty_node)
	}

	// find second faulty node
	if (first_faulty_node != null && previous_node.value >= tree_node.value){
		second_faulty_node = tree_node
		console.log(`second_faulty_node: `, second_faulty_node)
	}

	console.log("-".repeat(25))
	console.log(`tree_node.value: ${tree_node.value}, previous_node.value: ${previous_node.value}`)
	console.log("-".repeat(25))
	previous_node = tree_node
	in_order_recovery(tree_node.right)
}


function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
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