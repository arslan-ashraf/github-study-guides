function find_left_and_right_indexes(arr, target) {
    let left_index = find_extreme_index(arr, target, "left")
    let right_index = find_extreme_index(arr, target, "right")
    return [left_index, right_index]
}

function find_extreme_index(arr, target, search_side){
    let extreme_index = -1
    let left = 0
    let right = arr.length - 1
    while (left <= right){
        let middle = Math.floor((left + right)/2)
        if (arr[middle] == target) {
            // only two changes from standard binary search
            extreme_index = middle
            if (search_side == "left"){
                right = middle - 1
            } else if (search_side == "right"){
                left = middle + 1
            } 
            // end of change from standard binary search
        } else if (arr[middle] > target) {
            right = middle - 1
        } else if (arr[middle] < target){
            left = middle + 1
        }
    }
    return extreme_index
}

// function search_sorted_range(arr, target) {
//     let left_index = find_left_index(arr, target)
//     let right_index = find_right_index(arr, target)
//     return [left_index, right_index]
// }

// function find_left_index(arr, target){
//     let left_most_index = -1
//     let left = 0
//     let right = arr.length - 1
//     while (left <= right){
//         let middle = Math.floor((left + right)/2)
//         if (arr[middle] == target) {
//             left_most_index = middle
//             right = middle - 1
//         } else if (arr[middle] > target){
//             right = middle - 1
//         } else if (arr[middle] < target) {
//             left = middle + 1
//         }
//     }
//     return left_most_index
// }

// function find_right_index(arr, target){
//     let right_most_index = -1
//     let left = 0
//     let right = arr.length - 1
//     while (left <= right){
//         let middle = Math.floor((left + right)/2)
//         if (arr[middle] == target) {
//             right_most_index = middle
//             left = middle + 1
//         } else if (arr[middle] > target) {
//             right = middle - 1
//         } else if (arr[middle] < target){
//             left = middle + 1
//         }
//     }
//     return right_most_index
// }


let test1 = [1]
let test2 = [5,7,7,8,8,10]
console.log(search_sorted_range(test1, 1))
console.log(search_sorted_range(test2, 8))

let arr1 = [0,1,2,3,4,5,6,7,8,9,10]
let arr2 = [1,5,5,5,5,5,5,5,5,9,10]
let arr3 = [0,1,2,3,4,5,5,5,6,7,10]

console.log(search_sorted_range(arr1, 1))
console.log(search_sorted_range(arr2, 5))
console.log(search_sorted_range(arr3, 5))