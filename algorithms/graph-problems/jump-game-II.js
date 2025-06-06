function jump_game_II(arr){
	
	let index = 0
	let destination = arr.length - 1
	let end_of_current_level = 0 // level being in the sense of BFS
	let furthest_jump_index = 0 // furthest index that can be reached
	let num_jumps = 0

	while(index < destination){
		furthest_jump_index = Math.max(furthest_jump_index, index + arr[index])
		if (index == end_of_current_level){
			num_jumps += 1
			end_of_current_level = furthest_jump_index
		}
		index += 1
	}
	return num_jumps
}

jump_game_II([1, 3, 0, 1, 4, 1, 5])