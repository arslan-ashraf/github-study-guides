function best_time_to_buy_and_sell_stock_iii_backtracking(prices, num_transactions = 2){
	
}


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
			buy_prices[k] = Math.min(buy_prices[k], sell_price - dp[k - 1])
			dp[k] = Math.max(dp[k], sell_price - buy_prices[k])
		}
	}

	console.log(dp)
	console.log(buy_prices)
	return dp[num_transactions]
}

console.log(best_time_to_buy_and_sell_stock_iii_dp_space_optimized([ 3, 3, 5, 0, 0, 3, 1, 4 ]) == 6)