function minimum_size_subarray_sum(k, arr){
	let current_sum = 0
	let shortest_subarray = arr.length + 1
	let left = 0
	let right = 0
	while (right < arr.length){
		while (right < arr.length && current_sum < k){
			current_sum += arr[right]
			right += 1
		}
		while (left < arr.length && current_sum >= k){
			if (right - left < shortest_subarray){
				shortest_subarray = right - left
			}
			current_sum -= arr[left]
			left += 1
		}
	}
	return shortest_subarray == arr.length + 1 ? 0 : shortest_subarray
}

console.log(minimum_size_subarray_sum(11, [1,1,1,1,1,1,1,1]) == 0)
console.log(minimum_size_subarray_sum(7, [2,3,1,2,4,3]) == 2)