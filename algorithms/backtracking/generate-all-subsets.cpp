#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void backtrack(vector<int> &nums, 
			   vector<int> &temp,
			   vector<vector<int>> &result,
			   int current_level){
	result.push_back(temp);

	int start_branch = current_level;
	for (int current_branch = start_branch; current_branch < nums.size(); current_branch++){
		temp.push_back(nums[current_branch]);
		backtrack(nums, temp, result, current_branch + 1);
		temp.pop_back();
	}
}

vector<vector<int>> generate_all_subsets(vector<int> &nums){
	vector<int> temp;
	vector<vector<int>> result;
	int current_level = 0;
	std::sort(nums.begin(), nums.end());
	backtrack(nums, temp, result, current_level);
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