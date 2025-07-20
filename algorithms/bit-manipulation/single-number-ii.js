function single_number_ii(arr){
	let summed_bits = new Array(32).fill(0)
	for (let i = 0; i < 32; i++){
		for (let j = 0; j < arr.length; j++){
			// arr[j] & (1 << i) gets the bit at position i
			if ((arr[j] & (1 << i)) != 0){
				summed_bits[31 - i] += 1
			}
		}
		summed_bits[31 - i] %= 3
	}

	console.log(summed_bits)
	let result_bit_string = summed_bits.join('')
	return parseInt(result_bit_string, 2)
}

single_number_ii([3, 4, 4, 1, 3, 4, 3]) // returns 1