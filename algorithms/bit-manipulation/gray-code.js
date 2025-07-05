function gray_code(n){
	let gray_codes = []
	let total_codes = 1 << n 		// ex: if n = 3, 1 << 3 = 8
	for (let k = 0; k < total_codes; k++){
		gray_codes.push(k ^ (k >> 1))
	}
	return gray_codes
}

console.log(gray_code(2))
console.log(gray_code(3))