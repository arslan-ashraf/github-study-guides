function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
	this.next = null
}

function populate_right_next_pointer_of_each_node_ii_BFS(root_node){
	let dummy_pointer = new TreeNode(0)
	let previous_node = dummy_pointer
	let current_node = root_node

	while (current_node != null){
		if (current_node.left != null){
			previous_node.next = current_node.left
			previous_node = previous_node.next
		}
		if (current_node.right != null){
			previous_node.next = current_node.right
			previous_node = previous_node.next
		}
		current_node = current_node.next
		if (current_node == null){
			previous_node = dummy_pointer
			current_node = dummy_pointer.next
			dummy_pointer.next = null
		}
	}

	return root_node
}