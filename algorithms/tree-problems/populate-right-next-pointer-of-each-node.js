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


function populate_right_next_pointer_of_each_node_BFS_no_queue(root_node){
	let dummy_root_pointer = root_node
	let current_tree_node = root_node

	while (current_tree_node != null){

		let current_level_current_node = current_tree_node
		while (current_level_current_node != null){

			if (current_level_current_node.left){  // same as DFS solution
				current_level_current_node.left.next = current_level_current_node.right

				if (current_level_current_node.next){
					current_level_current_node.right.next = current_level_current_node.next.left
				}
			} else {
				break
			}

			current_level_current_node = current_level_current_node.next
		}

		current_tree_node = current_tree_node.left
	}
}