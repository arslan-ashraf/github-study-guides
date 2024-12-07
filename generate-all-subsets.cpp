#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void backtrack(vector<int> &nums, 
			   vector<int> &temp,
			   vector<vector<int>> &result,
			   int start_level){
	result.push_back(temp);

	for (int current_level = start_level; current_level < nums.size(); current_level++){
		temp.push_back(nums[current_level]);
		backtrack(nums, temp, result, current_level + 1);
		temp.pop_back();
	}
}

vector<vector<int>> generate_all_subsets(vector<int> &nums){
	vector<int> temp;
	vector<vector<int>> result;
	int start_level = 0;
	std::sort(nums.begin(), nums.end());
	backtrack(nums, temp, result, start_level);
	return result;
}

int main(){

	vector<int> nums = { 1, 2, 3 };
	vector<vector<int>> result = generate_all_subsets(nums);

	for (auto &row : result){
		cout << "[ ";
		for (int number : row){
			cout << number << " ";
		}
		cout << " ]" << endl;
	}
}
