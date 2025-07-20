function single_number_iii(arr){
	let XOR_of_all_nums = 0
	for (let i = 0; i < arr.length; i++){ XOR_of_all_nums ^= arr[i] }

	// XOR trick to turn a number's rightmost bit to 1 and all other bits to 0
	// ex: 10110100 -> 00000100
	let right_most_bit = XOR_of_all_nums & -XOR_of_all_nums

	let first_single_number = 0
	
	for (let i = 0; i < arr.length; i++){
		// separate numbers in the array into two virtual groups
		// and find the first unique number in that group
		if (arr[i] & right_most_bit != 0){
			first_single_number ^= arr[i]
		}
	}

	// the second_single_number can be found by XORing the first_single_number
	// with initial XOR_of_all_nums

	let second_single_number = XOR_of_all_nums ^ first_single_number

	return [first_single_number, second_single_number]
}