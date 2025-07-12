function TreeNode(value){
	this.value = value
	this.left = null
	this.right = null
}




let one = new TreeNode(1)
let two = new TreeNode(2)
let three = new TreeNode(3)
let four = new TreeNode(4)
let five = new TreeNode(5)
let six = new TreeNode(6)
let seven = new TreeNode(7)

one.left = two
one.right = five

two.left = three
two.right = four


five.left = six
five.right = seven