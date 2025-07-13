function best_time_to_buy_and_sell_stock_i(prices){
	let left = 0	// buy pointer
	let right = 1	// sell pointer
	let max_profit = 0

	while (right < prices.length){
		let current_profit = prices[right] - prices[left]
		if (prices[left] < prices[right]){
			max_profit = Math.max(max_profit, current_profit)
		} else {
			left = right
		}
		right += 1
	}

	return max_profit
}

best_time_to_buy_and_sell_stock_i([ 7, 1, 5, 3, 6, 4 ])