#include <iostream>
#include <vector>

using namespace std;

int backtrack(vector<int> &nums, int start_level){
	if (start_level >= nums.size()) return 0;
	int rob_current = nums[start_level] + backtrack(nums, start_level + 2);
	int rob_next = backtrack(nums, start_level + 1);
	return max(rob_current, rob_next);
}

int house_robber(vector<int> &nums){
	int start_level = 0;
	int result = backtrack(nums, start_level);
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

int backtrack(vector<int> &nums, int memo[], int start_level){
	if (start_level >= nums.size()) return 0;
	if (memo[start_level] >= 0) return memo[start_level];
	int rob_current = nums[start_level] + backtrack(nums, memo, start_level + 2);
	int rob_next = backtrack(nums, memo, start_level + 1);
	int max_gain = max(rob_current, rob_next);
	memo[start_level] = max_gain;
	return max_gain;
}

int house_robber(vector<int> &nums){
	int memo[nums.size()];
	std::fill(memo, memo + nums.size(), -1); // fill is from <algorithm>
	int start_level = 0;
	int result = backtrack(nums, memo, start_level);
	return result;
}

int main(){

	vector<int> nums = { 1, 3, 2, 1 };

	int result = house_robber(nums);

	cout << "result: " << result << endl;

}