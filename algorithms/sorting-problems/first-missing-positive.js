function first_missing_positive(arr){
	if (arr.length == 0) return 1
	if (arr.length == 1) return arr[0] == 1 ? 2 : 1
	let temp;
	for (let i = 0; i < arr.length; i++){
		while (i != arr[i]){
			if (arr[i] < 0 || arr[i] >= arr.length || arr[i] == arr[arr[i]]) break
			temp = arr[i]
			arr[i] = arr[arr[i]]
			arr[temp] = temp
		}
	}
	let j = 1
	while (j < arr.length){
		if (j != arr[j]) break
		j += 1
	}
	if (j == arr.length && arr[0] == arr.length) return arr[0] + 1
	return j 
}