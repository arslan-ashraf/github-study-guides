function square_root(x){
	let left = 0
	let right = x
	while (left <= right){
		let middle = Math.floor(left + (right - left)/2)
		let middle_squared = middle * middle
		if (middle_squared == x){
			return middle
		} else if (middle_squared < x){
			left = middle + 1
		} else if (middle_squared > x){
			right = middle - 1
		}
	}
	return right
}

console.log(square_root(8) == 2)
console.log(square_root(9) == 3)
console.log(square_root(100) == 10)
console.log(square_root(11) == 3)