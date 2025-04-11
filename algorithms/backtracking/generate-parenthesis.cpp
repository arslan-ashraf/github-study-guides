#include <iostream>
#include <vector>

using namespace std;

void backtrack(int n, string temp, vector<string> &result, 
			   int start_level, int num_open, int num_close){
	if (temp.length() == 2 * n){
		result.push_back(temp);
	} else {
		if (num_open < n){
			backtrack(n, temp + "(", result, start_level + 1, num_open + 1, num_close);
		}
		if (num_close < num_open) {
			backtrack(n, temp += ")", result, start_level + 1, num_open, num_close + 1);
		}
	}
}

vector<string> generate_parenthesis(int n){
	string temp;
	vector<string> result;
	int start_level = 0;
	int num_open = 0;
	int num_close = 0;
	backtrack(n, temp, result, start_level, num_open, num_close);
	return result;
}

int main(){

	int n = 3;

	vector<string> result = generate_parenthesis(n);

	cout << "[ ";
	for (auto str : result){
		cout << str << ", ";
	}
	cout << " ]" << endl;

}