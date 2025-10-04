function tree_bfs_search(tree_node){
	let queue = ["#", tree_node]
	let result = []

	while (queue.length > 0){
		let current_node = queue.shift()

		if (current_node == "#"){
			current_node = queue.shift()
			result.push([])
			result.push(current_node.value)
			queue.push("#")
		}

		

	}
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

console.log(tree_bfs_search(seven))