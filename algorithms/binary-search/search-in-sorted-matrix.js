function search_in_sorted_matrix(matrix, target){
	let top_row = 0
	let bottom_row = matrix.length - 1
	let left_most_column = 0
	let right_most_column = matrix[0].length - 1

	while (top_row <= bottom_row){

		let middle_row = Math.floor(top_row + (bottom_row - top_row)/2)

		if (matrix[middle_row][left_most_column] <= target && 
			target <= matrix[middle_row][right_most_column]){

			return standard_binary_search(matrix, middle_row, target)

		} else if (matrix[middle_row][right_most_column] < target){

			top_row = middle_row + 1

		} else if (matrix[middle_row][left_most_column] > target){

			bottom_row = middle_row - 1

		}

	}
	return [-1, -1]
}

function standard_binary_search(matrix, search_row, target){
	let left = 0
	let right = matrix[search_row].length - 1
	while (left <= right){
		let middle = Math.floor(left + (right - left)/2)
		if (matrix[search_row][middle] == target){
			return [search_row, middle]
		} else if (matrix[search_row][middle] < target){
			left = middle + 1
		} else if (matrix[search_row][middle] > target){
			right = middle - 1
		}
	}
	return [-1, -1]
}


let matrix = [
	[1, 10, 11, 14, 16, 19],
	[20, 21, 25, 28, 30, 36],
	[40, 43, 47, 48, 50, 51],
	[54, 55, 57, 60, 61, 69],
	[71, 76, 81, 89, 95, 98]
]

console.log(search_in_sorted_matrix(matrix, 30))	// returns [1, 4]
console.log(search_in_sorted_matrix(matrix, 90))	// returns [-1, -1]
console.log(search_in_sorted_matrix(matrix, 51))	// returns [2, 5]
console.log(search_in_sorted_matrix(matrix, 30))	// returns [1, 4]
console.log(search_in_sorted_matrix(matrix, 1))		// returns [0, 0]