function merge_two_sorted_lists(list1, list2){
	let new_list = new ListNode(0)
	let dummy = new_list
	while(list1 && list2){
		if (list1.val < list2.val){
			new_list.next = list1
			list1 = list1.next
		} else {
			new_list.next = list2
			list2 = list2.next
		}
		new_list = new_list.next
	}
	if (!list1){
		new_list.next = list2
	} else if (!list2){
		new_list.next = list1
	}
	return dummy.next
}