function Node(value){
	this.value = value
	this.left = null
	this.right = null
	this.height = 1
}

class AVL_Tree {
	insert(tree, value){
		if (!tree){
			return new Node(value)
		}
		if (tree.value > value){
			tree.left = this.insert(tree.left, value)
		} else {
			tree.right = this.insert(tree.right, value)
		}
		let balance = this.get_height(tree.left) - this.get_height(tree.right)
		// negative balance indicates fewer nodes on the left subtree than right subtree
		if (balance < -1){
			// now is the imbalance of too many nodes due to there
			// being a node to the tree.right.right side or tree.right.left side
			if (this.get_height(tree.right.right) >= this.get_height(tree.right.left)){
				tree = this.rotate_left(tree)
			} else {
				tree.right = this.rotate_right(tree.right)
				tree = this.rotate_left(tree)
			}
		} else if (balance > 1){
			if (this.get_height(tree.left.left) >= this.get_height(tree.left.right)){
				tree = rotate_right(tree)
			} else {
				tree.left = rotate_left(tree.left)
				tree = rotate_right(tree)
			}
		} else {
			tree.height = this.set_height(tree)
		}
		return tree
	}

	remove(tree, value){
		if (!tree) return null
		if (!tree.left && !tree.right) return null
		if (!tree.left) return tree.right
		if (!tree.right) return tree.left
		if (tree.value == value){
			let tmp = this.get_min(tree.right)
			tree.value = tmp
			tree.right = this.remove(tree.right, tmp)
		} else if (tree.value > value){
			tree.left = this.remove(tree.left)
		} else {
			tree.right = this.remove(tree.right)
		}
	}
	
	rotate_left(tree){
		let right_subtree = tree.right
		tree.right = tree.right.left
		right_subtree.left = tree
		tree.height = this.set_height(tree)
		right_subtree.height = this.set_height(right_subtree)
		return right_subtree
	}

	rotate_right(tree){
		let left_subtree = tree.left
		tree.left = tree.left.right
		left_subtree.right = tree
		tree.height = this.set_height(tree)
		left_subtree.height = this.set_height(left_subtree)
		return left_subtree
	}

	get_height(tree){
		return tree ? tree.height : 0
	}

	set_height(tree){
		let left_height = tree.left ? tree.left.height : 0
		let right_height = tree.right ? tree.right.height : 0
		return Math.max(left_height, right_height) + 1
	}

	get_min(tree){
		if (!tree) return null
		if (!tree.left) return tree.value
		while (tree.left){
			tree = tree.left
		}
		return tree.value
	}
}

let tree = null
let avl_tree = new AVL_Tree()
tree = avl_tree.insert(tree, 1)
tree = avl_tree.insert(tree, 2)
tree = avl_tree.insert(tree, 3)


// a negative balance indicates that the right subtree has too
// many nodes and has the following shape:
//    1
//     5
//      9
// or
//    1
//     5
//    9
// hence, why there is a tree.right.right vs tree.right.left comparison
// where tree indicates node 1