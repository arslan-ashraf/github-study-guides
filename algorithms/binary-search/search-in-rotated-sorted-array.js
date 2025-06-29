function search_in_rotated_sorted_array(arr, target) {
    let left = 0
    let right = arr.length - 1
    let middle;
    while (left <= right){
        middle = Math.floor((left + right)/2)
        if (arr[middle] == target){
            return middle
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
    return - 1
}

console.log(search_in_rotated_sorted_array([4, 5, 6, 7, 8, 9, 0, 1, 2, 3], 0))