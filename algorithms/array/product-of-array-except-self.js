function product_of_array_except_self(arr){
	let n = arr.length
	let result = new Array(n)

	let left_product = 1
	let right_to_left_products = new Array(n)

	// fill cache of right to left products
	right_to_left_products[n - 1] = arr[n - 1]
	for (let i = n - 2; i >= 0; i--){
		right_to_left_products[i] = right_to_left_products[i + 1] * arr[i]
	}
	
	for (let i = 1; i < n - 1; i++){
		left_product = left_product * arr[i - 1]
		result[i] = left_product * right_to_left_products[i + 1]
	}
	
	// fill in the two ends
	result[0] = right_to_left_products[1]
	result[n - 1] = left_product * arr[n - 2] 
	return result
}

product_of_array_except_self([3, -1, 2, 4, 5])