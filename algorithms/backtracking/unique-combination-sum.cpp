#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void backtrack(vector<int> &nums, 
			   int target,
			   vector<int> &temp,
			   vector<vector<int>> &result,
			   int current_level){
	if (target == 0){
		result.push_back(temp);
	} else if (target > 0) {
		int start_branch = current_level;
		for (int current_branch = start_branch; current_branch < nums.size(); current_branch++){
			// one of two differences between combination sum and its unique version
			// the other being current_branch + 1 in the recursive call
			if (current_branch > start_branch &&
			nums[current_branch] == nums[current_branch - 1]) { continue; }
			temp.push_back(nums[current_branch]);
			backtrack(nums, target - nums[current_branch], temp, result, current_branch + 1);
			temp.pop_back();
		}
	}
}

vector<vector<int>> unique_combination_sum(vector < int > &nums, int target){
	vector<int> temp;
	vector<vector<int>> result;
	int current_level = 0;
	std::sort(nums.begin(), nums.end(), std::greater());
	backtrack(nums, target, temp, result, current_level);
	return result;
}

int main(){

	vector<int> nums = { 10, 1, 2, 7, 6, 1, 5 };
	int target = 8;

	vector<vector<int>> result = unique_combination_sum(nums, target);

	for (auto &row : result){
		cout << "[ ";
		for (int number : row){
		cout << number << " ";
		}
		cout << " ]" << endl;
	}

}