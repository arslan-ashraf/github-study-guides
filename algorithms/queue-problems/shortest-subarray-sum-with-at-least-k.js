// double sliding window left_to_right and right_to_left
// only partially correct, fails when the sum from either direction 
// goes up and down because of positive and then negative numbers or vice versa
function shortest_subarray_with_sum_at_least_k(arr, k){
	let n = arr.length
	let left_to_right_shortest = left_to_right_shortest_subarray(arr, k)
	let right_to_left_shortest = right_to_left_shortest_subarray(arr, k)
	if (left_to_right_shortest == n + 1 && right_to_left_shortest == n + 1) return -1
	return Math.min(left_to_right_shortest, right_to_left_shortest)
}

function left_to_right_shortest_subarray(arr, k){
	let current_sum = 0
	let shortest_subarray = arr.length + 1
	let left = 0
	let right = 0
	while (right < arr.length){
		while (right < arr.length && current_sum < k){
			current_sum += arr[right]
			right += 1
			if (current_sum < 0){ 
				current_sum = 0
				left = right
			}
		}
		while (left < arr.length && current_sum >= k){
			if (right - left < shortest_subarray){
				shortest_subarray = right - left
			}
			current_sum -= arr[left]
			left += 1
		}
	}
	return shortest_subarray
}

function right_to_left_shortest_subarray(arr, k){
	let current_sum = 0
	let shortest_subarray = arr.length + 1
	let left = arr.length - 1
	let right = arr.length - 1
	while (left >= 0){
		while (left >= 0 && current_sum < k){
			current_sum += arr[left]
			left -= 1
			if (current_sum < 0){
				current_sum = 0
				right = left
			}
		}
		while (right >= 0 && current_sum >= k){
			if (right - left < shortest_subarray){
				shortest_subarray = right - left
			}
			current_sum -= arr[right]
			right -= 1
		}
	}
	return shortest_subarray
}


console.log(shortest_subarray_with_sum_at_least_k([84, -37, 32, 40, 95], 167) == 3)
console.log(shortest_subarray_with_sum_at_least_k([100, -30, 9000, -9101, 45, 2, -4, 3, 56, 99, -1], 400) == 1)
console.log(shortest_subarray_with_sum_at_least_k([84, -37, 32, 40, 95], 167) == 3)
console.log(shortest_subarray_with_sum_at_least_k([1, 2, -4, 3, -6, 99, -1], 103) == -1)
console.log(shortest_subarray_with_sum_at_least_k([-28, 81,-20, 28,-29], 89) == 3)
let long_input = [-34, 37, 51, 3, -12, -50, 51, 100, -47, 99, 34, 14, -13, 89, 31, -14, -44, 23, -38, 6]
console.log(shortest_subarray_with_sum_at_least_k(long_input, 151) == 2) // fails here, returns 3