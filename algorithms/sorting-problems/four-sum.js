function four_sum(arr, target) {
    let result = []
    arr = arr.sort((a, b) => a - b)
    for (let idx_1 = 0; idx_1 < arr.length; idx_1++){
        // move past duplicates in the first index
        if (idx_1 > 0 && arr[idx_1] == arr[idx_1 - 1]) continue
        for (let idx_2 = idx_1 + 1; idx_2 < arr.length; idx_2++){
            // move past duplicates in the second index
            if (idx_2 > idx_1 + 1 && arr[idx_2] == arr[idx_2 - 1]) continue
            let left = idx_2 + 1
            let right = arr.length - 1
            while (left < right){
                let _four_sum = arr[idx_1] + arr[idx_2] + arr[left] + arr[right]
                if (_four_sum < target){
                    left += 1
                } else if (_four_sum > target){
                    right -= 1
                } else {
                    result.push([arr[idx_1], arr[idx_2], arr[left], arr[right]])
                    // move past duplicates in the third and fourth indices
                    while (left < right && arr[left] == arr[left + 1]){ left += 1 }
                    while (left < right && arr[right] == arr[right - 1]){ right -= 1 }
                    left += 1
                    right -= 1
                }
            }
        }
    }
    return result
}


console.log(four_sum([2,2,2,2,2], 8) == [[2,2,2,2]])

console.log(four_sum([1,0,-1,0,-2,2], 0) == [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]])