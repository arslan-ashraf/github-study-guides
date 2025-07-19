function remove_fewest_overlapping_intervals(intervals){
	intervals.sort((a, b) => a[1] - b[1] )

	let last_non_overlapping_interval_end_time = intervals[0][1]
	let num_intervals_to_remove = 0

	for (let i = 1; i < intervals.length; i++){
		
		let current_interval_start_time = intervals[i][0]
		let current_interval_end_time 	= intervals[i][1]

		// check if the current interval has started before the last
		// non overlapping one has ended
		if (current_interval_start_time < last_non_overlapping_interval_end_time){
			num_intervals_to_remove += 1
		} else {
			last_non_overlapping_interval_end_time = current_interval_end_time
		}

	}

	return num_intervals_to_remove
}


// should return 1
remove_fewest_overlapping_intervals([[4, 5], [2, 7], [8, 9], [1, 3]])