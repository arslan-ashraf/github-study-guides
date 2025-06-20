function next_permutation(arr){
	let pivot_index = find_pivot(arr)

	// pivot_index is negative only if the array is fully 
	// sorted in descending order
	if (pivot_index < 0) return arr.reverse()

	let pivot_successor_index = find_pivot_successor(arr, pivot_index)
	swap(arr, pivot_index, pivot_successor_index)
	reverse_right_part(arr, pivot_index + 1)

	return arr
}

function find_pivot(arr){
	let i;
	for (i = arr.length - 2; i >= 0; i--){
		if (arr[i] < arr[i + 1]) return i
	}
	return i
}

function find_pivot_successor(arr, pivot_index){
	for (let i = arr.length - 1; i > pivot_index; i--){
		if (arr[pivot_index] < arr[i]) return i
	}
}

function swap(arr, left, right){
	let temp = arr[left]
	arr[left] = arr[right]
	arr[right] = temp
}

function reverse_right_part(arr, left) {
	let right = arr.length - 1
	while (left < right) {
		let temp = arr[left]
		arr[left] = arr[right]
		arr[right] = temp
		left += 1
		right -= 1
	}
}

next_permutation([6, 2, 1, 5, 3, 0])
next_permutation([5, 6, 3, 2, 1, 0])
next_permutation([6, 5, 4, 3, 2, 1])