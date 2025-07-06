function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}

function bfs_with_dfs(tree_node){
	let result = []
	let current_level = 0
	pre_order_traversal(tree_node, current_level, result)
	return result
}

function pre_order_traversal(tree_node, current_level, result){
	if (tree_node == null) return
	if (result.length == current_level) result.push([])

	result[current_level].push(tree_node.value)

	pre_order_traversal(tree_node.left, current_level + 1, result)
	pre_order_traversal(tree_node.right, current_level + 1, result)
}

let one = new TreeNode(1)
let four = new TreeNode(4)
let five = new TreeNode(5)
let six = new TreeNode(6)
let seven = new TreeNode(7)
let eight = new TreeNode(8)
let nine = new TreeNode(9)

seven.left = five
seven.right = nine

five.left = four
five.right = six

four.left = one

nine.left = eight

bfs_with_dfs(seven)