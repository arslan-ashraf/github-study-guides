function single_numer(arr){
	let XOR_of_all_nums = 0

	for (let i = 0; i < arr.length; i++){
		XOR_of_all_nums ^= arr[i]
	}

	return XOR_of_all_nums
}

single_numer([3, 2, 2, 3, 4, 1, 4])