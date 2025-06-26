function permutation_sequence(n, k){
	let numbers_used = new Array(n + 1).fill(false)
	let result = ""
	while (k > 1){
		let n_minus_one_factorial = factorial(n - 1)
		let permutation_group = Math.ceil(k / n_minus_one_factorial)
		let number = permutation_group_first_number(permutation_group, numbers_used)
		numbers_used[number] = true
		result += String(number)
		k = k % n_minus_one_factorial
		n -= 1
	}
	console.log(numbers_used)
	if (k == 1){
		for (let i = 1; i < numbers_used.length; i++){
			if (numbers_used[i] == false) result += String(i)
		}
	}
	if (k == 0){
		for (let i = numbers_used.length - 1; i >= 1; i--){
			if (numbers_used[i] == false) result += String(i)
		}
	}
	return result
}

function factorial(x){
	let result = 1
	for (let i = 2; i <= x; i++){
		result *= i
	}
	return result
}

function permutation_group_first_number(permutation_group, numbers_used){
	for(let i = permutation_group; i < numbers_used.length; i++){
		if (numbers_used[i] == false) return i
	}
}


console.log(permutation_sequence(4, 1))
console.log(permutation_sequence(4, 2))
console.log(permutation_sequence(4, 6))
console.log(permutation_sequence(4, 7))
console.log(permutation_sequence(4, 3))