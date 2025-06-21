function n_queens(n){
	let result = [], temp = new Array(n)
	backtrack(result, temp, 0)
	return result
}

function backtrack(result, temp, index){
	if (index == temp.length){
		result.push(temp.slice(0)) // or result.push([...temp])
		return
	}
	for(let i = 0; i < temp.length; i++){
		temp[index] = "Q"
		if (valid_position(temp, index)){
			backtrack(result, temp, flip_switch, index + 1)
		}
	}
}

function valid_position(temp, index){
	for(let i = 0; i < index; i++){
		if (temp[i] == temp[index] ||
			Math.abs(temp[i] - temp[index]) == Math.abs(index - i)){
				return false 
			}
	}
	return true 
}