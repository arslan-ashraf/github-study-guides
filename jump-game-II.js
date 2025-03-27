function jump_game_II(arr){
	
	let current_level = 0
	let next_level = 0
	let furthest_jump = 0
	let destination = arr.length - 1
	let jumps = 0

	while(current_level < destination){
		furthest_jump = Math.max(furthest_jump, arr[current_level] + current_level)
		if (current_level == next_level){
			jumps += 1
			next_level = furthest_jump
		}
		current_level++
	}
	return jumps
}

jump_game_II([1, 3, 0, 1, 4, 1, 5])