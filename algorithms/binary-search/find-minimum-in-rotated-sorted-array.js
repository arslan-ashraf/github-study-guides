function find_minimum_rotated_sorted_array(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right){
        let middle = Math.floor((left + right)/2)
        if (arr[middle] > arr[right]){
            left = middle + 1
        } else {
            right = middle
        }
    }
    return arr[left]
}

console.log(find_minimum_rotated_sorted_array([4, 5, 6, 7, 8, 9, 0, 1, 2, 3]) == 0)