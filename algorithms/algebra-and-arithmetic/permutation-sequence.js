function permutation_sequence(n, k){
	let range_for_numbers = new Array(n + 1)
	let n_minus_one_factorial = factorial(n - 1)
	let range_start = 1
	let end_range = n_minus_one_factorial
	for (let i = 1; i <= n; i++){
		range_for_numbers[i] = [range_start, end_range]
		range_start = end_range + 1
		end_range += n_minus_one_factorial
	}
	console.log(range_for_numbers)
	// let result = ""
	// while (k > 0){
	// 	let current_number = Math.floor(k / n_minus_one_factorial) + 1
	// 	result += String(current_number)
	// 	k = k % n_minus_one_factorial
	// 	n -= 1
	// }
}

function factorial(x){
	let result = 1
	for (let i = 2; i <= x; i++){
		result *= i
	}
	return result
}


console.log(permutation_sequence(4))