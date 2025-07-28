function jump_game_III(arr, start_index){
	let queue = [start_index]

	// BFS
	while (queue.length > 0){
		let current_index = queue.shift()

		if (arr[current_index] == 0) return true

		// mark vertex as visited
		let jump_value = arr[current_index]
		arr[current_index] = -1

		// next jump positions
		let forward_jump_index = current_index + jump_value
		let backward_jump_index = current_index - jump_value

		if (forward_jump_index < arr.length && arr[forward_jump_index] != -1){
			queue.push(forward_jump_index)
		}

		if (backward_jump_index >= 0 && arr[backward_jump_index] != -1){
			queue.push(backward_jump_index)
		}
	}
}

console.log(jump_game_III([4, 2, 3, 0, 3, 1, 2], 5))