function find_minimum_rotated_sorted_array(arr){
    let left = 0
    let right = arr.length - 1
    let minimum_element = arr[0]
    while (left <= right){
        let middle = Math.floor((left + right)/2)
        minimum_element = Math.min(minimum_element, arr[middle])
        if (arr[middle] > arr[right]){
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return minimum_element
}

console.log(find_minimum_rotated_sorted_array([4, 5, 6, 7, 8, 9, 0, 1, 2, 3]) == 0)
console.log(find_minimum_rotated_sorted_array([3, 4, 5, 1, 2]) == 1)
console.log(find_minimum_rotated_sorted_array([3, 1, 2]) == 1)


function find_minimum_rotated_sorted_array1(arr) {
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

console.log(find_minimum_rotated_sorted_array1([4, 5, 6, 7, 8, 9, 0, 1, 2, 3]) == 0)
console.log(find_minimum_rotated_sorted_array1([3, 1, 2]) == 1)