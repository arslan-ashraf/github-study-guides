function search_in_rotated_sorted_array_ii(arr, target){
	let left = 0
    let right = arr.length - 1
    let middle;
    while (left <= right){
        middle = Math.floor((left + right)/2)
        if (arr[middle] == target){
            return true
        } else if (arr[left] == arr[middle] && arr[middle] == arr[right]){ // Case 0
        	// Case 0: arr[left] = arr[middle] = arr[right]
        	return linear_search(arr, target, left, right)
        } else if (arr[middle] > arr[right]){ // Case 1: right part is rotated
            // so left part is properly sorted, check if target is in there
            if (arr[left] <= target && target < arr[middle]){
                right = middle - 1
            } else {
                left = middle + 1
            }
        } else if (arr[middle] < arr[left]){  // Case 2: left part is rotated
            // so right part is properly sorted, check if target is in there
            if (arr[middle] < target && target <= arr[right]){
                left = middle + 1
            } else {
                right = middle - 1
            }
        } else { // Case 3: array/subarray is properly sorted, standard binary search
            if (target > arr[middle]){
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
    }
    return false
}

function linear_search(arr, target, left, right){
	while (left <= right){
		if (arr[left] == target) return true
		left += 1
	}
	return false
}

console.log(search_in_rotated_sorted_array_ii([4, 4, 4, 4, 4, 4, 1, 2, 3, 4, 4], 1) == true)
console.log(search_in_rotated_sorted_array_ii([4, 4, 4, 4, 4, 4, 1, 2, 3, 4, 4], 0) == false)
console.log(search_in_rotated_sorted_array_ii([4, 4, 4, 4, 4, 4, 1, 2, 3, 4, 4], 3) == true)
console.log(search_in_rotated_sorted_array_ii([4, 4, 4, 4, 4, 4, 1, 2, 3, 4, 4], 4) == true)