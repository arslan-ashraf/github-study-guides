function jump_game_I(arr){
	let count = 1
	let destination = arr.length - 1
	for(let i = arr.length - 2; i >= 0; i--){
		if (arr[destination - count] + i >= destination){
			destination = destination - count
			count = 1
		} else {
			count += 1
		}
	}
	return destination == 0 ? true : false
}

jump_game_I([2, 4, 0, 1, 0, 1, 4]) // true
jump_game_I([2, 3, 1, 1, 4]) // true
jump_game_I([3, 2, 1, 0, 4]) // false
jump_game_I([6, 4, 3, 1, 0, 1, 0, 4]) // false
jump_game_I([7, 4, 3, 1, 0, 1, 0, 4]) // true


// a simpler more intuitive solution
function jump_game(arr){
	let destination = arr.length - 1
	for (let current_index = arr.length - 2; current_index >= 0; current_index--){
		if (current_index + arr[current_index] >= destination){
			destination = current_index
		}
	}
	return destination == 0 ? true : false
}