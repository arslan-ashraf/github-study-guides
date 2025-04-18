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
		int start_branch = current_level
		for (int current_level = start_branch; current_level < nums.size(); current_level++){
			temp.push_back(nums[current_level]);
			backtrack(nums, target - nums[current_level], temp, result, current_level);
			temp.pop_back();
		}
	}
}

vector<vector<int>> combination_sum(vector < int > &nums, int target){
	vector<int> temp;
	vector<vector<int>> result;
	int current_level = 0;
	std::sort(nums.begin(), nums.end(), std::greater());
	backtrack(nums, target, temp, result, current_level);
	return result;
}

int main(){

	vector < int > nums = { 3, 2, 4, 7 };
	int target = 7;

	vector<vector<int>> result = combination_sum(nums, target);

	for (auto &row : result){
		cout << "[ ";
		for (int number : row){
					cout << number << " ";
		}
		cout << " ]" << endl;
	}

}