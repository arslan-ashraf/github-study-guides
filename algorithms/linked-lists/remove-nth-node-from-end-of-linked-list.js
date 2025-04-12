function remove_nth_node(head, n){
	let left = head
	let right = head
	for (let i = 0; i < n; i++){
		right = right.next
	}
	if (right == null) return head.next
	while (right.next != null){
		left = left.next
		right = right.next
	}
	left.next = left.next.next
	return head
}