// a more general solution that allows up to d duplicates in the result
function remove_duplicates_from_sorted_array_II(arr, d = 2){
    let left = 0
    let right = 0
    let dup_count = 1
    while (right < arr.length){
        while (right + 1 < arr.length && arr[right] == arr[right + 1]){
            right += 1
            dup_count += 1
        } 
        for (let i = 0; i < Math.min(d, dup_count); i++){
            arr[left] = arr[right]
            left += 1
        }
        dup_count = 1
        right += 1
    }
    return arr
}

remove_duplicates_from_sorted_array_II([1,1,1,1,2,2,2,3,3,3,3,3,4])