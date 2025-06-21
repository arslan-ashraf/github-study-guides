function rotate_list(list, k){
	if (!list || !list.next) return list

	let left_node = list, right_node = list
	let num_nodes = 0
	let dummy = list 

	while (dummy){
		num_nodes += 1
		dummy = dummy.next
	}

	k = k % num_nodes
	if (k == 0) return list 
	
	for (let i = 0; i < k; i++){
		right_node = right_node.next
	}

	while (right_node.next){
		right_node = right_node.next
		left_node = left_node.next
	}

	let new_list = left_node.next
	left_node.next = null
	right_node.next = list
	return new_list
}