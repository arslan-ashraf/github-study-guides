function count_primes(n){
	let num_primes = 0
	let numbers_seen = new Array(n).fill(false)
	for(let i = 2; i < n; i++){
		if (numbers_seen[i] == true){
			continue
		}
		for(let j = i * i; j < n; j += i){
			numbers_seen[j] = true
		}
		num_primes += 1
	}
	return num_primes
}