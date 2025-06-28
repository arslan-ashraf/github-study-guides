function merge_intervals(intervals){
	if (intervals.length <= 1) return intervals
	intervals.sort((a, b) => a[0] - b[0])
	let result = [intervals[0]]

	for(let i = 1; i < intervals.length; i++){
		if (result[result.length - 1][1] < intervals[i][0]){
			result.push(intervals[i])
		} else {
			result[result.length - 1][1] = Math.max(result[result.length - 1][1],
													intervals[i][1])
		}
	}
	return result
}

// should return [[1, 7], [8, 9]]
merge_intervals([[4, 5], [1, 3], [8, 9], [3, 7]])