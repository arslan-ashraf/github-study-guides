function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}

let previous_node = null

// reverse postorder traversal: right, left, head
function flatten_binary_tree_to_linked_list_preorder(root_node){
	flatten(root_node)
}

function flatten(current_tree_node){
	if (current_tree_node == null) return

	flatten(current_tree_node.right)
	flatten(current_tree_node.left)

	current_tree_node.right = previous_node
	current_tree_node.left = null

	previous_node = current_tree_node
}


function flatten_binary_tree_to_linked_list_preorder_iterative(root_node){
	let current_node = root_node
	while (current_node != null){

		if (current_node.left != null){

			let previous_node = current_node.left
			while(previous_node.right != null){ previous_node = previous_node.right }
			previous_node.right = current_node.right

			current_node.right = current_node.left
			current_node.left = null
		}

		current_node = current_node.right
	}
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