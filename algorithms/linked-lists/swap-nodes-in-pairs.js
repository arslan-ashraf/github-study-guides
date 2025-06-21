function swap_nodes_in_pairs(head){
    let list = head
    let odd_list = new ListNode(0), even_list = new ListNode(0)
    let odd_list_ptr1 = odd_list, odd_list_ptr2 = odd_list
    let even_list_ptr1 = even_list, even_list_ptr2 = even_list
    while (list){
        odd_list.next = list
        list = list.next
        odd_list = odd_list.next
        if (list){
            even_list.next = list
            list = list.next
            even_list = even_list.next
        }
    }
    odd_list_ptr1 = odd_list_ptr1.next
    even_list_ptr1 = even_list_ptr1.next
    while (odd_list_ptr1){
        let temp = even_list_ptr1.next
        even_list_ptr1.next = odd_list_ptr1
        odd_list_ptr1.next = temp
    }
}