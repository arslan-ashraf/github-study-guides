function best_time_to_buy_and_sell_stock_iii(prices, num_transactions = 2){
	let dp = new Array(num_transactions).fill().map(() => new Array(prices.length))

}

best_time_to_buy_and_sell_stock_iii([ 3, 3, 5, 0, 0, 3, 1, 4 ])



function best_time_to_buy_and_sell_stock_iii_space_optimized(prices, num_transactions = 2){
	if (prices.length == 0) return 0
	let dp = new Array(num_transactions + 1).fill(0)
	let minimum_price = new Array(num_transactions + 1).fill(prices[0])
	for (let i = 1; i < prices.length; i++){
		for (let k = 1; k <= num_transactions; k++){
			minimum_price[k] = Math.min(minimum_price[k], prices[i] - dp[k - 1])
			dp[k] = Math.max(dp[k], prices[i] - minimum_price[k])
		}
	}
	return dp[num_transactions]
}

best_time_to_buy_and_sell_stock_iii_space_optimized([ 3, 3, 5, 0, 0, 3, 1, 4 ])