function maximal_rectangle(matrix){
	let max_rectangle = 0
	let heights = new Array(matrix[0].length).fill(0)
	for (let i = 0; i < matrix.length; i++){
		for (let j = 0; j < matrix[i].length; j++){
			if (matrix[i][j] == 1) {
				heights[j] += 1
			} else if (matrix[i][j] == 0){
				heights[j] = 0
			}
		}
		let _area_of_largest_rectangle = area_of_largest_rectangle(heights)
		max_rectangle = Math.max(max_rectangle, _area_of_largest_rectangle)
	}
	return max_rectangle
}


function area_of_largest_rectangle(heights){
	let stack = [] 
	let largest_rectangle = 0
	for (let i = 0; i <= heights.length; i++){
		// heights descending or end of array
		while(stack.length > 0 && 
			  i == heights.length || 
			  heights[i] < heights[stack[stack.length - 1]]){ 
			let top_of_stack = stack.pop()
			let height = heights[top_of_stack]
			let width = stack.length == 0 ? i : i - stack[stack.length - 1] - 1
			largest_rectangle = Math.max(largest_rectangle, height * width)
		}
		stack.push(i) // heights ascending or stack is empty
	}
	return largest_rectangle
}


let matrix = [
	[1, 0, 1, 0, 0],
	[1, 0, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 0, 0, 1, 0]
]

console.log(maximal_rectangle(matrix) == 6)