function longest_consecutive_sequence(arr){
	let max_sequence_length = 0
	let hashset = new Set()
	for (let i = 0; i < arr.length; i++){ hashset.add(arr[i]) }

	for (let i = 0; i < arr.length; i++){

		let current_sequence_length = 1
		let current_element = arr[i]

		if (hashset.has(current_element)){
			hashset.delete(current_element)

			while (hashset.has(current_element + 1)){
				current_element += 1
				hashset.delete(current_element)
			}
			current_sequence_length += current_element - arr[i]

			current_element = arr[i]

			while (hashset.has(current_element - 1)){
				current_element -= 1
				hashset.delete(current_element)
			}
			current_sequence_length += arr[i] - current_element
		}

		max_sequence_length = Math.max(max_sequence_length, current_sequence_length)

	}
	return max_sequence_length
}

console.log(longest_consecutive_sequence([ 100, 4, 200, 3, 2, 1 ]))