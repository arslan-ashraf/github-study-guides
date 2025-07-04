function rotate_list(head_node, k){
	if (!head_node || !head_node.next) return head_node

	let left_node = head_node, right_node = head_node
	let num_nodes = 0
	let dummy = head_node 

	while (dummy){
		num_nodes += 1
		dummy = dummy.next
	}

	k = k % num_nodes
	if (k == 0) return head_node 
	
	for (let i = 0; i < k; i++){
		right_node = right_node.next
	}

	while (right_node.next){
		right_node = right_node.next
		left_node = left_node.next
	}

	let new_list = left_node.next
	left_node.next = null
	right_node.next = head_node
	return new_list
}