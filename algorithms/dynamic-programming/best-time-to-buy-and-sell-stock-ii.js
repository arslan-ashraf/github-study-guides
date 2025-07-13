function best_time_to_buy_and_sell_stock_ii(prices){
	let max_profit = 0
	for (let i = 1; i < prices.length; i++){
		if (prices[i - 1] < prices[i]){
			max_profit += prices[i] - prices[i - 1]
		}
	}
	return max_profit
}

best_time_to_buy_and_sell_stock_ii([ 7, 1, 5, 3, 6, 4 ])