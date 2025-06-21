function rotate_image(matrix){
	transpose(matrix)
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