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


function gray_code_induction(n){
	let gray_codes = get_gray_codes_recursive(n)
	console.log(gray_codes)
	for (let i = 0; i< gray_codes.length; i++){
		gray_codes[i] = parseInt(gray_codes[i], 2)
	}
	return gray_codes
}

function get_gray_codes_recursive(n){
	if (n <= 1) return ["0", "1"]

	let gray_codes_n_minus_1 = get_gray_codes_recursive(n - 1)

	let result = []

	for (let i = 0; i < gray_codes_n_minus_1.length; i++){
		result.push("0" + gray_codes_n_minus_1[i])
	}

	for (let i = gray_codes_n_minus_1.length - 1; i >= 0; i--){
		result.push("1" + gray_codes_n_minus_1[i])
	}

	return result
}

console.log(gray_code_induction(2))
console.log(gray_code_induction(3))