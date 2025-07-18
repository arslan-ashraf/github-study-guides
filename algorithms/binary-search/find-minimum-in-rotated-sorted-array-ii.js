function find_minimum_rotated_sorted_array_ii(arr){
	let left = 0
	let right = arr.length - 1
	while (left < right){
		let middle = Math.floor(left + (right - left)/2)
		if (arr[left] == arr[middle] && arr[middle] == arr[right]){
			return linear_search(arr, left, right)
		} else if (arr[middle] > arr[right]){
			left = middle + 1
		} else {
			right = middle
		}
	}
	return arr[left]
}


function linear_search(arr, left, right){
	let minimum_element = 2**31
	while (left <= right){
		minimum_element = Math.min(minimum_element, arr[left])
		left += 1
	}
	return minimum_element
}


console.log(find_minimum_rotated_sorted_array_ii([4, 4, 4, 4, 4, 4, 1, 2, 3, 4, 4]) == 1)
console.log(find_minimum_rotated_sorted_array_ii([4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4]) == 0)
console.log(find_minimum_rotated_sorted_array_ii([4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4]) == 0)