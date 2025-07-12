function is_tree_symmetric(root_node){
	// break tree into two subtrees
	return is_symmetric_dfs(root_node.left, root_node.right)
}

is_symmetric_dfs(left_subtree, right_subtree){
	if (left_subtree == null && right_subtree == null) return true

	if (left_subtree == null || right_subtree == null) return false

	if (left_subtree.value != right_subtree.val) return false

	let outer_symmetric = is_symmetric_dfs(left_subtree.left, right_subtree.right)
	let inner_symmetric = is_symmetric_dfs(left_subtree.right, right_subtree.left)

	if (outer_symmetric == false || inner_symmetric == false) return false

	return true
}