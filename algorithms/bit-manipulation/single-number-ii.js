function single_number_ii(arr){
	let summed_bits = new Uint32Array(32).fill(0)
	for (let i = 31; i >= 0; i--){
		for (let j = 0; j < arr.length; j++){
			console.log(1 << i)
			summed_bits[i] += arr[j] & (1 << i)
		}
	}

	console.log(summed_bits)
}

single_number_ii([3, 4, 4, 1, 3, 4, 3]) // returns 1