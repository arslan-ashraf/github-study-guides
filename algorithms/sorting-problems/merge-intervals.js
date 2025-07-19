function merge_intervals(intervals){
	if (intervals.length <= 1) return intervals
	intervals.sort((a, b) => a[0] - b[0])
	let result = [intervals[0]]

	for(let i = 1; i < intervals.length; i++){

		let last_non_overlapping_interval_end_time = result[result.length - 1][1]
		let current_interval_start_time = intervals[i][0]
		let current_interval_end_time = intervals[i][1]

		// is there an overlap
		if (current_interval_start_time > last_non_overlapping_interval_end_time){
			result.push(intervals[i]) // no overlap
		} else {
			// last_non_overlapping_interval_end_time
			result[result.length - 1][1] = Math.max(last_non_overlapping_interval_end_time,
													current_interval_end_time)
		}
	}
	return result
}

// should return [[1, 7], [8, 9]]
merge_intervals([[4, 5], [1, 3], [8, 9], [3, 7]])