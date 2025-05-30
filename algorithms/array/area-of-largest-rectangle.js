// O(n^2) solution
function area_of_largest_rectangle1(heights){
	if (heights.length == 0) return 0
	let temp_largest_rectangle = heights[0]
	let largest_rectangle = heights[0]
	for(let i = 1; i < heights.length; i++){
		let min_height = heights[i]
		for(let j = i; j >= 0; j--){
			min_height = Math.min(min_height, heights[j])
			temp_largest_rectangle = Math.max(temp_largest_rectangle, min_height * (i - j + 1))
		}
		largest_rectangle = Math.max(largest_rectangle, temp_largest_rectangle)
	}
	return largest_rectangle
}

console.log(area_of_largest_rectangle1([2, 1, 5, 6, 2, 3])) // returns 10 = height 5 * width 2
console.log(area_of_largest_rectangle1([1, 2, 3, 4, 5, 4, 3, 2, 1])) // returns 15 = height 3 * width 5


// O(n) time and O(n) space - stack based solution
function area_of_largest_rectangle(heights){
	let stack = [] 
	let largest_rectangle = 0
	for (let i = 0; i <= heights.length; i++){
		if(i == heights.length || stack.length > 0){
			console.log("i:", i, " heights[i]:", heights[i])
			// heights descending or end of array
			while(i == heights.length || heights[i] < heights[stack[stack.length - 1]]){ 
				let top_of_stack = stack.pop()
				let height = heights[top_of_stack]
				let width = i - top_of_stack
				largest_rectangle = Math.max(largest_rectangle, height * width)
				if (stack.length == 0) break // otherwise while loop runs indefinitely
			}
		}
		stack.push(i) // heights ascending or stack is empty
	}
	return largest_rectangle
}

console.log(area_of_largest_rectangle([1, 2, 3, 4, 5])) // returns 9 = height 3 * width 3
console.log(area_of_largest_rectangle([2, 1, 5, 6, 2, 3])) // returns 10 = height 5 * width 2
console.log(area_of_largest_rectangle([1, 2, 3, 4, 5, 4, 3, 2, 1])) // returns 15 = height 3 * width 5