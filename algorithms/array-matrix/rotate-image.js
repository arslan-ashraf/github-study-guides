function rotate_image(matrix){
	transpose(matrix)	// square matrix only
	reverse_rows(matrix)
	return matrix
}

function transpose(matrix){
	for(let i = 0; i < matrix.length; i++){
		for(let j = i + 1; j < matrix[i].length; j++){
			let temp = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = temp
		}
	}
}

function reverse_rows(matrix){
	for(let i = 0; i < matrix.length; i++){
		matrix[i].reverse()
	}
}

let matrix = [
	[1, 3, 1, 8, 5],
	[5, 2, 9, 4, 0],
	[6, 7, 7, 3, 5],
	[4, 0, 5, 3, 1],
	[1, 6, 1, 9, 5]
]

console.log(rotate_image(matrix))