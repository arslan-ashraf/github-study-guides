function permutation_sequence(n, k){
	let numbers_used = new Array(n + 1).fill(false)
	let result = ""
	while (k > 0){
		let n_minus_one_factorial = factorial(n - 1)
		let current_number = Math.floor(k / n_minus_one_factorial) + 1
		result += String(current_number)
		k = k % n_minus_one_factorial
		n -= 1
	}
}

function factorial(x){
	let result = 1
	for (let i = 2; i <= x; i++){
		result *= i
	}
	return result
}