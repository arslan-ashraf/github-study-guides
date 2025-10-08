function smallest_string_starting_from_leaf(tree_node){

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

//					7
//			5				9
//		4		6		8
//	 1
