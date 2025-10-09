function smallest_string_starting_from_leaf(tree_node){
	let result = ""
	let current_path = []

	preorder_dfs(tree_node, current_path, result)

	return result
}

function preorder_dfs(tree_node, current_path, result)


function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
	this.next = null
}

let twenty_five = new TreeNode(25)
let twenty_four = new TreeNode(24)
let twenty_three = new TreeNode(23)
let five = new TreeNode(5)
let six = new TreeNode(6)
let four = new TreeNode(4)
let one = new TreeNode(1)
let zero_first = new TreeNode(0)
let zero_second = new TreeNode(0)


twenty_five.left = twenty_four
twenty_five.right = six

twenty_four.left = twenty_three
twenty_four.right = five

six.left = four
six.right = one

five.left = zero_first

one.left = zero_second

//					25
//			24				6
//		23		5		4		1
//	 		  0				  0