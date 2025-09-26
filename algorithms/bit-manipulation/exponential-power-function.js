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

console.log(exponential_power(3, 3) == 27)