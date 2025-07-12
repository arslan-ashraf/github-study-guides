function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}

let previous_node = null

function flatten_binary_tree_to_linked_list_preorder(root_node){
	flatten(root_node)
}

function flatten(tree_node){
	if (tree_node == null) return

	flatten(tree_node.right)
	flatten(tree_node.left)

	tree_node.right = previous_node
	tree_node.left = null

	previous_node = tree_node
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

flatten_binary_tree_to_linked_list_preorder(one)