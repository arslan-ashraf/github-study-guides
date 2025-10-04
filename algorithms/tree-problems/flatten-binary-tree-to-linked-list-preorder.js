// reverse postorder traversal: right, left, head
function flatten_binary_tree_to_linked_list_preorder(root_node){
	flatten(root_node)
}

let previous_node = null

function flatten(current_tree_node){
	if (current_tree_node == null) return

	flatten(current_tree_node.right)
	flatten(current_tree_node.left)

	current_tree_node.right = previous_node
	current_tree_node.left = null

	previous_node = current_tree_node
}



// most efficient
function flatten_binary_tree_to_linked_list_preorder_iterative(root_node){
	let current_node = root_node

	while (current_node != null){

		// find bottom right most node on left subtree
		if (current_node.left != null){

			let bottom_right_node = current_node.left
			while(bottom_right_node.right != null){ bottom_right_node = bottom_right_node.right }

			// point bottom right most node's right pointer to current_node's right subtree
			bottom_right_node.right = current_node.right

			current_node.right = current_node.left
			current_node.left = null
		}

		current_node = current_node.right
	}
}


function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}

let one = new TreeNode(1)
let two = new TreeNode(2)
let three = new TreeNode(3)
let four = new TreeNode(4)
let five = new TreeNode(5)
let six = new TreeNode(6)
let seven = new TreeNode(7)

one.left = two
one.right = five

two.left = three
two.right = four


five.left = six
five.right = seven

// flatten_binary_tree_to_linked_list_preorder(one)
flatten_binary_tree_to_linked_list_preorder_iterative(one)