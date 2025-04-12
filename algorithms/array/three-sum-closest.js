function three_sum_closest(arr, target) {
    let closest_three_sum = 1/0
    let result_three_sum;
    arr.sort((a, b) => a - b)
    for (let idx_1 = 0; idx_1 < arr.length; idx_1++){
        let left = idx_1 + 1
        let right = arr.length - 1
        while (left < right){
            let three_sum = arr[idx_1] + arr[left] + arr[right]
            if (Math.abs(three_sum - target) < closest_three_sum){
                result_three_sum = three_sum
                closest_three_sum = Math.abs(three_sum - target)
            }
            if (three_sum == target) {
                return three_sum
            } else if (three_sum < target){
                left += 1
            } else if (three_sum > target){
                right -= 1
            }
        }
    }
    return result_three_sum
}


console.log(three_sum_closest([-1,2,1,-4], 1) == 2)