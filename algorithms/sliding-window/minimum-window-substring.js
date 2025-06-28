function minimum_window_substring(str, pattern){

	let pattern_counter_map = {} // new Array(128) is better, upto 128 characters
	for (let i = 0; i < pattern.length; i++){
		if (pattern_counter_map[pattern[i]]){
			pattern_counter_map[pattern[i]] += 1
		} else {
			pattern_counter_map[pattern[i]] = 1
		}
	}

	let left = 0, right = 0
	let smallest_window_start = 0, smallest_window_length = 2**31
	let pattern_counter = pattern.length

	while (right < str.length){
		if (pattern_counter_map[str[right]] > 0) pattern_counter -= 1
		pattern_counter_map[str[right]] -= 1
		right += 1
		while (pattern_counter == 0){
			if (right - left < smallest_window_length){
				smallest_window_length = right - left
				smallest_window_start = left
			}
			if (pattern_counter_map[str[left]] == 0) pattern_counter += 1
			pattern_counter_map[str[left]] += 1
			left += 1
		}
	}

	let result = str.substring(smallest_window_start, 
							   smallest_window_start + smallest_window_length)
	return smallest_window_length == 2**31 ? "" : result
}

minimum_window_substring("adobecodebanc", "abc")