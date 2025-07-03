function partition_linked_list(head_node, x){
	let left_head_node = new ListNode()
	let right_head_node = new ListNode()

	let left_tail_node = left_head_node
	let right_tail_node = right_head_node

	while(head_node != null){
		if (head_node.val < x){
			left_tail_node.next = head_node
			left_tail_node = left_tail_node.next
		} else {
			right_tail_node.next = head_node
			right_tail_node = right_tail_node.next
		}
		head_node = head_node.next
	}
	left_tail_node.next = right_head_node
	right_tail_node.next = null
	return left_head_node.next
}