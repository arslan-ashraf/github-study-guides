// mostly correct but does not pass all test cases
function find_majority_element1(arr){

	let majority_guess = arr[0]
	let majority_element = arr[0]
	let majority_count = 1

	let other_element = null
	let other_count = 0

	for (let i = 1; i < arr.length; i++){
		if (arr[i] == majority_guess){
			majority_count += 1
			if (majority_count > other_count) majority_element = majority_guess
			
		} else if (arr[i] == other_element){
			other_count += 1
			if (other_count > majority_count) majority_element = other_element
		} else {
			other_element = majority_element
			other_count = majority_count > other_count ? majority_count : other_count
			majority_guess = arr[i]
			majority_count = 1
		}
	}

	return majority_element
}

console.log(find_majority_element1([1,3,1,1,4,1,1,5,1,1,6,2,2]) == 1)



function find_majority_element(arr){
	let vote_count = 0
	let candidate = null

	for (let i = 0; i < arr.length; i++){
		if (vote_count == 0){
			candidate = arr[i]
			vote_count = 1
		} else {
			if (arr[i] == candidate){
				vote_count += 1
			} else {
				vote_count -= 1
			}
		}
	}

	return candidate
}

console.log(find_majority_element([1,0,1]) == 1)
console.log(find_majority_element([1,0,1,0,1,1,0])  == 1)
console.log(find_majority_element([0,0,1,1,1]) == 1)
console.log(find_majority_element([0,3,1,1,1]) == 1)
console.log(find_majority_element([1,2,3,1,0,1,1]) == 1)
console.log(find_majority_element([0,2,3,1,1,1,1]) == 1)
console.log(find_majority_element([1,1,1,1,0,0,0]) == 1)
console.log(find_majority_element([1,1,1,3,3,3,1,4,1]) == 1)
console.log(find_majority_element([1,1,1,3,3,3,1,1,4]) == 1)
console.log(find_majority_element([1,1,1,3,3,3,1]) == 1)
console.log(find_majority_element([1,3,1,1,4,1,1,5,1,1,6,2,2]) == 1)