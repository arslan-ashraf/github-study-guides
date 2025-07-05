function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}

function recover_binary_search_tree(tree){
	let  = in_order_recovery(tree, null)

}

function in_order_recovery(tree, first_faulty_node){
	if (tree == null) return
	in_order_recovery(tree.left)
	if (tree.left && tree.left.value > tree.value){
		first_faulty_node = tree.left
	}
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