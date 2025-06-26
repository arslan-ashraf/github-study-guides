// O(n^2)
function trapping_rain_water_1(heights){
	let total_volume = 0
	let left_largest_height = 0
	let right_largest_height = 0
	for(let i = 1; i < heights.length; i++){
		// look to the left for largest possible bar that is larger than heights[i]
		for(let j = i - 1; j >= 0; j--){
			if (heights[j] > left_largest_height && heights[j] > heights[i]){
				left_largest_height = heights[j]
			}
		}

		// look to the right for largest possible bar that is larger than heights[i]
		for(let k = i + 1; k < heights.length; k++){
			if (heights[k] > right_largest_height && heights[k] > heights[i]){
				right_largest_height = heights[k]
			}
		}

		// to ensure that bars to the left and right larger than heights[i] were indeed found
		if (left_largest_height > 0 && right_largest_height > 0){
			// take the smaller of the left and right bars
			let max_usable_height = Math.min(left_largest_height, right_largest_height)
			total_volume += max_usable_height - heights[i]
		}

		left_largest_height = 0, right_largest_height = 0
	}
	return total_volume
}


console.log(trapping_rain_water_1([2, 1, 4, 2, 1, 0, 3, 2, 1, 5, 0, 4]) == 20)