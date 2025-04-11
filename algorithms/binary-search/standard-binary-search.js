function binary_search(arr, target){
    let left = 0
    let right = arr.length - 1
    while (left <= right){
        let middle = Math.floor((left + right)/2)
        if (arr[middle] == target) {
            return middle
        } else if (arr[middle] < target){
            left = middle + 1
        } else if (arr[middle] > target) {
            right = middle - 1
        }
    }
    return -1
}

let arr = [0,1,2,3,4,5,6,7,8,9,10]

console.log(binary_search(arr, 14))
console.log(binary_search(arr, -1))
console.log(binary_search(arr, 1))
console.log(binary_search(arr, 8))