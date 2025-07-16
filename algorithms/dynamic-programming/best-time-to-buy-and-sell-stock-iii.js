function best_time_to_buy_and_sell_stock_iii_backtracking(prices, num_transactions = 2){
	// 0 = no stock owned, 1 = stock owned
	let transactions_made = 0
	let current_state = 0
	let current_level = 0
	return backtracking_dfs(prices, transactions_made, num_transactions, current_state, current_level)
}

function backtracking_dfs(prices, transactions_made, total_transactions, current_state, current_level){
	if (current_level >= prices.length || transactions_made >= total_transactions) return 0

	// do nothing
	let do_nothing = backtracking_dfs(prices, transactions_made, total_transactions, current_state, current_level + 1)

	let buy_sell_action = 0
	if (current_state == 0){	// no stock owned, so buy

		let buy_price = prices[current_level]
		buy_sell_action = backtracking_dfs(prices, transactions_made, total_transactions, 1, current_level + 1) - buy_price

	} else if (current_state == 1){		// stock owned, so sell

		let sell_price = prices[current_level]
		buy_sell_action = backtracking_dfs(prices, transactions_made + 1, total_transactions, 0, current_level + 1) + sell_price

	}

	let current_profit = Math.max(do_nothing, buy_sell_action)
	
	return current_profit
}

console.log(best_time_to_buy_and_sell_stock_iii_backtracking([ 0, 5, 10 ]) == 10)
console.log(best_time_to_buy_and_sell_stock_iii_backtracking([ 0, 5, 0, 1, 10 ]) == 15)
console.log(best_time_to_buy_and_sell_stock_iii_backtracking([ 3, 3, 5, 0, 0, 3, 1, 4 ]) == 6)



function best_time_to_buy_and_sell_stock_iii_backtracking_memoized(prices, num_transactions = 2){
	// 0 = no stock owned, 1 = stock owned
	let transactions_made = 0
	let current_state = 0
	let current_level = 0
	let cache = {}
	return backtracking_dfs_memoized(prices, transactions_made, num_transactions, current_state, current_level, cache)
}

function backtracking_dfs_memoized(prices, transactions_made, total_transactions, current_state, current_level, cache){
	if (current_level >= prices.length || transactions_made >= total_transactions) return 0

	let key = String(transactions_made) + " | " + String(current_state) + " | " + String(current_level)
	if (cache[key] != undefined) return cache[key]

	// do nothing
	let do_nothing = backtracking_dfs_memoized(prices, transactions_made, total_transactions, current_state, current_level + 1, cache)

	let buy_sell_action = 0
	if (current_state == 0){	// no stock owned, so buy

		let buy_price = prices[current_level]
		buy_sell_action = backtracking_dfs_memoized(prices, transactions_made, total_transactions, 1, current_level + 1, cache) - buy_price

	} else if (current_state == 1){  	// stock owned, so sell

		let sell_price = prices[current_level]
		buy_sell_action = backtracking_dfs_memoized(prices, transactions_made + 1, total_transactions, 0, current_level + 1, cache) + sell_price

	}

	let current_profit = Math.max(do_nothing, buy_sell_action)
	cache[key] = current_profit
	
	return current_profit
}

console.log(best_time_to_buy_and_sell_stock_iii_backtracking_memoized([ 0, 5, 10 ]) == 10)
console.log(best_time_to_buy_and_sell_stock_iii_backtracking_memoized([ 0, 5, 0, 1, 10 ]) == 15)
console.log(best_time_to_buy_and_sell_stock_iii_backtracking_memoized([ 3, 3, 5, 0, 0, 3, 1, 4 ]) == 6)



function best_time_to_buy_and_sell_stock_iii_dp(prices, num_transactions = 2){

	let dp = new Array(num_transactions + 1).fill().map(() => new Array(prices.length))
	for (let i = 0; i < prices.length; i++){ dp[0][i] = 0 }
	for (let j = 0; j <= num_transactions; j++){ dp[j][0] = 0 }

	let buy_prices = new Array(num_transactions + 1).fill(prices[0])

	for (let i = 1; i < prices.length; i++){
		for (let k = 1; k <= num_transactions; k++){
			let sell_price = prices[i]
			buy_prices[k] = Math.min(buy_prices[k], sell_price - dp[k - 1][i - 1])
			dp[k][i] = Math.max(dp[k][i - 1], sell_price - buy_prices[k])
		}
	}

	console.log(dp)
	console.log(buy_prices)
	return dp[num_transactions][prices.length - 1]

}

console.log(best_time_to_buy_and_sell_stock_iii_dp([ 3, 3, 5, 0, 0, 3, 1, 4 ]) == 6)



function best_time_to_buy_and_sell_stock_iii_dp_space_optimized(prices, num_transactions = 2){
	if (prices.length == 0) return 0

	let dp = new Array(num_transactions + 1).fill(0)

	let buy_prices = new Array(num_transactions + 1).fill(prices[0])

	for (let i = 1; i < prices.length; i++){
		for (let k = 1; k <= num_transactions; k++){
			let sell_price = prices[i]
			buy_prices[k] = Math.min(buy_prices[k], sell_price - dp[k - 1])
			dp[k] = Math.max(dp[k], sell_price - buy_prices[k])
		}
	}

	console.log(dp)
	console.log(buy_prices)
	return dp[num_transactions]
}

console.log(best_time_to_buy_and_sell_stock_iii_dp_space_optimized([ 3, 3, 5, 0, 0, 3, 1, 4 ]) == 6)