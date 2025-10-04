function tree_bfs_search(tree_node){
	let queue = ["#", tree_node]
}


function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
	this.next = null
}

let one = new TreeNode(1)
let four = new TreeNode(4)
let five = new TreeNode(5)
let six = new TreeNode(6)
let seven = new TreeNode(7)
let eight = new TreeNode(8)
let nine = new TreeNode(9)

seven.left = five
seven.right = nine

five.left = four
five.right = six

four.left = one

nine.left = eight