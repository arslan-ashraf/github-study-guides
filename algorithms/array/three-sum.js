function three_sum(arr) {
    let result = []
    arr = arr.sort((a, b) => a - b)
    for (let idx_1 = 0; idx_1 < arr.length; idx_1++){
        if (idx_1 > 0 && arr[idx_1] == arr[idx_1 - 1]) continue
        let left = idx_1 + 1
        let right = arr.length - 1
        while (left < right){
            if (arr[idx_1] + arr[left] + arr[right] < 0){
                left += 1
            } else if (arr[idx_1] + arr[left] + arr[right] > 0){
                right -= 1
            } else {
                result.push([arr[idx_1], arr[left], arr[right]])
                while (left < right && arr[left] == arr[left + 1]){ left += 1 }
                while (left < right && arr[right] == arr[right - 1]){ right -= 1 }
                left += 1
                right -= 1
            }
        }
    }
    return result
}


console.log(three_sum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))
// result = [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]


console.log(three_sum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]))
// result = [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]