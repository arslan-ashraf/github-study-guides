#include <iostream>
#include <vector>

using namespace std;

int backtrack(vector<int> &nums, int current_level){
	if (current_level >= nums.size()) return 0;
	int rob_current = nums[current_level] + backtrack(nums, current_level + 2);
	int rob_next = backtrack(nums, current_level + 1);
	return max(rob_current, rob_next);
}

int house_robber(vector<int> &nums){
	int current_level = 0;
	int result = backtrack(nums, current_level);
	return result;
}

int main(){

	vector<int> nums = { 1, 3, 2, 1 };

	int result = house_robber(nums);

	cout << "result: " << result << endl;

}



////////////////////////////////////////////////////
/////////////// MEMOIZED SOLUTION //////////////////
////////////////////////////////////////////////////

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int backtrack(vector<int> &nums, int memo[], int current_level){
	if (current_level >= nums.size()) return 0;
	if (memo[current_level] >= 0) return memo[current_level];

	// rob current and move two levels down
	int rob_current = nums[current_level] + backtrack(nums, memo, current_level + 2);

	// don't rob the current and move only one level down
	int rob_next = backtrack(nums, memo, current_level + 1);
	int max_gain = max(rob_current, rob_next);

	memo[current_level] = max_gain;
	return max_gain;
}

int house_robber(vector<int> &nums){
	int memo[nums.size()];
	std::fill(memo, memo + nums.size(), -1); // fill is from <algorithm>
	int current_level = 0;
	int result = backtrack(nums, memo, current_level);
	return result;
}

int main(){

	vector<int> nums = { 1, 3, 2, 1 };

	int result = house_robber(nums);

	cout << "result: " << result << endl;

}