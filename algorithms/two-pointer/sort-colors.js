function sort_colors(arr){
	let zeros_pointer = 0
	let ones_pointer = 0
	let twos_pointer = arr.length - 1
	while (ones_pointer <= twos_pointer){
		if (arr[ones_pointer] == 0){
			swap(arr, zeros_pointer, ones_pointer)
			zeros_pointer += 1
			ones_pointer += 1
		} else if (arr[ones_pointer] == 1){
			ones_pointer += 1
		} else if (arr[ones_pointer] == 2){
			swap(arr, ones_pointer, twos_pointer)
			twos_pointer -= 1
		}
	}
	return arr
}

function swap(arr, x, y) {
	let temp = arr[x]
	arr[x] = arr[y]
	arr[y] = temp
}

// should return [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2]
console.log(sort_colors([2, 0, 1, 1, 0, 2, 0, 1, 2, 1, 2, 0, 1]))