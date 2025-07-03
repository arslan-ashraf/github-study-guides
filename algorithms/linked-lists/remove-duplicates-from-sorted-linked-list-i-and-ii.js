function remove_duplicates_from_sorted_linked_list_I(head_node){
	let current_node = head_node

	while (current_node != null && current_node.next != null){
		if (current_node.val == current_node.next.val){
			current_node.next = current_node.next.next
		} else {
			current_node = current_node.next
		}
	}

	return head_node
}



function remove_duplicates_from_sorted_linked_list_II(head_node){
	let dummy_node = new ListNode()
	dummy_node.next = head_node
	let left_node = dummy_node
	let right_node = head_node

	while (right_node != null){
		while(right_node.next != null && right_node.val == right_node.next.val){
			right_node = right_node.next
		}

		if (left_node.next == right_node){
			left_node = left_node.next
		} else {
			left_node.next = right_node.next
		}

		right_node = right_node.next
	}

	return dummy_node.next
}