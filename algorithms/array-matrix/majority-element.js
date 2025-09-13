// possibly does not pass all test cases
function find_majority_element(arr){

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
			other_element = majority_guess
			other_count = majority_count
			majority_guess = arr[i]
			majority_count = 1
		}
	}

	return majority_element
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



function find_majority_element1(arr){
	
}