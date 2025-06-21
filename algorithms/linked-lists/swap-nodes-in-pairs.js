function swap_nodes_in_pairs(list){
    let new_list = new ListNode(0)
    new_list.next = list
    let previous_node = new_list
    let current_node = list

    while (current_node && current_node.next){
        let new_node = current_node.next
        current_node.next = new_node.next
        new_node.next = current_node
        previous_node.next = new_node
        previous_node = current_node
        current_node = current_node.next
    }
    return new_list.next
}