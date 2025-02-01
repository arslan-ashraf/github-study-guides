function jump_game_II(arr){
	let level = 0, current = 0, furthest = 0
	let destination = arr.length - 1
	for(let i = 0; i < arr.length - 1; i++){
		furthest = Math.max(furthest, arr[i] + i)
		if (i == current){
			level += 1
			current = furthest
		}
	}
	return level
}

jump_game_II([1, 3, 0, 1, 4, 1, 5])