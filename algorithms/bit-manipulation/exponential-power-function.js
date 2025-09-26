function exponential_power_recursive(x, n){
	let absolute_n = Math.abs(n)
	let result = backtrack(x, absolute_n)
	return n > 0 ? result : 1/result
}

function backtrack(x, n){
	if (n == 0) return 1
	if (n == 1) return x

	if (n % 2 == 1){
		return x * backtrack(x, (n - 1)/2) * backtrack(x, (n - 1)/2)
	} else {
		return backtrack(x, n/2) * backtrack(x, n/2)
	}
}

console.log(exponential_power_recursive(2, 10) == 1024)
console.log(exponential_power_recursive(3, -2) == 1/9)
console.log(exponential_power_recursive(3, 3) == 27)
console.log(exponential_power_recursive(3, 4) == 81)


function exponential_power(x, n){
	let result = 1
	let absolute_n = Math.abs(n)
	while (absolute_n != 0){
		if ((absolute_n & 1) == 1){
			result = result * x
		}
		x = x * x
		absolute_n = absolute_n >>> 1
	}
	return n > 0 ? result : 1/result
}


console.log(exponential_power(2, 10) == 1024)
console.log(exponential_power(3, -2) == 1/9)
console.log(exponential_power(3, 3) == 27)
console.log(exponential_power(3, 4) == 81)