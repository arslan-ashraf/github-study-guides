function gray_code(n){
	let gray_codes = []
	let total_codes = 1 << n
	for (let i = 0; i < total_codes; i++){
		gray_codes.push(i ^ (i >> 1))
	}
	return gray_codes
}