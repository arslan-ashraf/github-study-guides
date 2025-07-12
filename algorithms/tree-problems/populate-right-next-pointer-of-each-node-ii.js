function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
	this.next = null
}

function populate_right_next_pointer_of_each_node_ii_BFS(root_node){
	let current_node = root_node

	let linked_list_head_node = new TreeNode(0)
	let linked_list_tail_node = linked_list_head_node

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
			linked_list_tail_node = linked_list_head_node // reset tail node to new TreeNode(0)
			current_node = linked_list_head_node.next     // move down one level to left most node
			linked_list_head_node.next = null			  // reset head.next = null
		}
	}

	return root_node
}