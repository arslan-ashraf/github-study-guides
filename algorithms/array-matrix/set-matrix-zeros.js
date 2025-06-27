function set_matrix_zeros_1(matrix){

	let row_zeros = new Array(matrix.length).fill(false)
	let column_zeros = new Array(matrix[0].length).fill(false)

	for(let i = 0; i < matrix.length; i++){
		for (let j = 0; j < matrix[i].length; j++){
			if (matrix[i][j] == 0){
				row_zeros[i] = true
				column_zeros[j] = true
			}
		}
	}

	for (let i = 0; i < row_zeros.length; i++){
		if (row_zeros[i] == true){
			for (let j = 0; j < matrix[i].length; j++){
				matrix[i][j] = 0
			}
		}
	}

	for (let j = 0; j < column_zeros.length; j++){
		if (column_zeros[j] == true){	
			for(let i = 0; i < matrix.length; i++){
				matrix[i][j] = 0		
			}
		}
	}

	return matrix
}

let matrix = [
	[1, 3, 1, 8, 5, 6],
	[5, 2, 9, 4, 0, 6],
	[6, 7, 7, 3, 5, 1],
	[4, 0, 5, 3, 1, 9],
	[1, 6, 1, 9, 5, 8]
]

console.log(set_matrix_zeros_1(matrix))