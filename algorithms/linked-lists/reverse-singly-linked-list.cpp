// iterative approach

Node *reverse_list(){

	Node *left_list = nullptr;
	Node *current_node = head_node;
	Node *right_list = nullptr;

	while (current_node != nullptr){
		right_list = current_node->next;  // step 1 in image
		current_node->next = left_list;    // steps 2 and 3 in image
		left_list = current_node;
		current_node = right_list;
	}
	head_node = left_list;
	return head_node;
}