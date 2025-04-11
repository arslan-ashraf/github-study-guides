function find_minimum_rotated(arr) {
    let left = 0
    let right = arr.length - 1
    let middle;
    while (left < right){
        middle = Math.floor((left + right)/2)
        if (arr[middle] > arr[right]){
            left = middle + 1
        } else {
            right = middle
        }
    }
    return arr[left]
}