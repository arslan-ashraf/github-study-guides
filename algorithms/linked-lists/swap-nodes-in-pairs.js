function swap_nodes_in_pairs(list){
    let dummy = new ListNode(0)
    dummy.next = list
    let current_node = dummy
    while (current_node.next && current_node.next.next){
        let node_a = current_node.next
        let node_b = current_node.next.next
        node_a.next = node_b.next
        current_node.next = node_b
        current_node.next.next = node_a
        current_node = current_node.next.next
    }
    return dummy.next
}