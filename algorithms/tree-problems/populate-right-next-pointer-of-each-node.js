function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
	this.next = null
}

function populate_right_next_pointer_of_each_node_DFS(root_node){
	
	preorder_dfs(root_node)
}

function preorder_dfs(current_tree_node){
	if (current_tree_node == null) return null

	if (current_tree_node.left != null){
		current_tree_node.left.next = current_tree_node.right
	}

	if (current_tree_node.next != null){
		current_tree_node.right.next = current_tree_node.next.left
	}

	preorder_dfs(current_tree_node.left)
	preorder_dfs(current_tree_node.right)
}