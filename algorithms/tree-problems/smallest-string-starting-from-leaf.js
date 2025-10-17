function smallest_string_starting_from_leaf(tree_node){
	let result = "{"	// "{" has ascii code 123, larger than "z"
	let current_path = []

	result = preorder_dfs(tree_node, current_path, result)

	return result
}

function preorder_dfs(tree_node, current_path, result){
	if (tree_node == null) return result

	let start_ascii_code = 'a'.charCodeAt()
	let current_node_ascii_code = String.fromCharCode(start_ascii_code + tree_node.value)
	
	current_path.push(current_node_ascii_code)

	if (tree_node.left == null && tree_node.right == null){
		
		let leaf_to_root_path = current_path.reverse().join('')

		// if (result == "" || leaf_to_root_path < result){  // if result is defined as ""
		if (leaf_to_root_path < result){
			result = leaf_to_root_path
		}

	}

	result = preorder_dfs(tree_node.left, current_path, result)

	result = preorder_dfs(tree_node.right, current_path, result)

	current_path.pop()

	return result
}


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

console.log(smallest_string_starting_from_leaf(twenty_five) == "abge")