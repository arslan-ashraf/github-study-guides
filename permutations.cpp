#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void backtrack(vector<int> &nums, vector<int> &temp, vector<vector<int>> &result){
	if (temp.size() == nums.size()) {
		result.push_back(temp);
	}

	for (int current_level = 0; current_level < nums.size(); current_level++){
		if (std::find(temp.begin(), temp.end(), nums[current_level]) != temp.end()) continue;
		temp.push_back(nums[current_level]);
		backtrack(nums, temp, result);
		temp.pop_back();
	}
}

vector<vector<int>> permutations(vector<int> &nums){
	vector<int> temp;
	vector<vector<int>> result;
	std::sort(nums.begin(), nums.end());
	backtrack(nums, temp, result);
	return result;
}

int main(){

	vector<int> nums = { 1, 2, 3 };
	vector<vector<int>> result = permutations(nums);

	for (auto &row : result){
		cout << "[ ";
		for (int number : row){
			cout << number << " ";
		}
		cout << " ]" << endl;
	}
}