function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
	this.next = null
}

function populate_right_next_pointer_of_each_node_ii_BFS(root_node){
	let dummy_node = new TreeNode(0)
	let linked_list_tail_node = dummy_node
	let current_node = root_node

	while (current_node != null){
		if (current_node.left != null){
			linked_list_tail_node.next = current_node.left
			linked_list_tail_node = linked_list_tail_node.next
		}
		if (current_node.right != null){
			linked_list_tail_node.next = current_node.right
			linked_list_tail_node = linked_list_tail_node.next
		}
		current_node = current_node.next
		if (current_node == null){
			linked_list_tail_node = dummy_node
			current_node = dummy_node.next   // move down one level to left most node
			dummy_node.next = null
		}
	}

	return root_node
}