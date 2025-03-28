function search_sorted_range(nums, target) {
    let left_index = find_left_right_index(nums, target, "left")
    let right_index = find_left_right_index(nums, target, "right")
    return [left_index, right_index]
}

function find_left_right_index(nums, target, search_side){
    let extreme_index = -1
    let left = 0
    let right = nums.length - 1
    while (left <= right){
        let middle = Math.floor((left + right)/2)
        if (nums[middle] == target) {
            extreme_index = middle
            if (search_side == "left"){
                right = middle - 1
            } else if (search_side == "right"){
                left = middle + 1
            } 
        } else if (nums[middle] > target) {
            right = middle - 1
        } else if (nums[middle] < target){
            left = middle + 1
        }
    }
    return extreme_index
}

// function search_sorted_range(nums, target) {
//     let left_index = find_left_index(nums, target)
//     let right_index = find_right_index(nums, target)
//     return [left_index, right_index]
// }

// function find_left_index(nums, target){
//     let left_most_index = -1
//     let left = 0
//     let right = nums.length - 1
//     while (left <= right){
//         let middle = Math.floor((left + right)/2)
//         if (nums[middle] == target) {
//             left_most_index = middle
//             right = middle - 1
//         } else if (nums[middle] > target){
//             right = middle - 1
//         } else if (nums[middle] < target) {
//             left = middle + 1
//         }
//     }
//     return left_most_index
// }

// function find_right_index(nums, target){
//     let right_most_index = -1
//     let left = 0
//     let right = nums.length - 1
//     while (left <= right){
//         let middle = Math.floor((left + right)/2)
//         if (nums[middle] == target) {
//             right_most_index = middle
//             left = middle + 1
//         } else if (nums[middle] > target) {
//             right = middle - 1
//         } else if (nums[middle] < target){
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