function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}

function is_valid_binary_tree(tree){
	return in_order_traversal(tree, -1/0, 1/0)
}

function in_order_traversal(tree, lower_bound, upper_bound){
	if (tree == null) return true

	if (lower_bound < tree.value && tree.value < upper_bound){

		let is_left_subtree_valid = in_order_traversal(tree.left, lower_bound, tree.value)
		let is_right_subtree_valid = in_order_traversal(tree.right, tree.value, upper_bound)
		return is_left_subtree_valid && is_right_subtree_valid

	} else {
		return false
	}
}


let one = new TreeNode(1)
let four = new TreeNode(4)
let five = new TreeNode(5)
let six = new TreeNode(6)
let seven = new TreeNode(7)
let eight = new TreeNode(8)
let nine = new TreeNode(9)

seven.left = five
seven.right = four

five.left = one
five.right = six

four.left = eight

console.log(is_valid_binary_tree(five) == true)
console.log(is_valid_binary_tree(seven) == false)