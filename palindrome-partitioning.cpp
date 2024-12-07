#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool is_palindrome(string &str, int left, int right){
	while (left < right){
		if (str[left] != str[right]) return false;
		left += 1; right -= 1;
	}
	return true;
}

void backtrack(string &str,
	vector<string> &temp,
	vector<vector<string>> &result,
	int start_level){
	if (start_level == str.size()){
		result.push_back(temp);
	} else {
		for (int current_level = start_level; current_level < str.size(); current_level++){
			bool is_substring_palindrome = is_palindrome(str, start_level, current_level);
			if (is_substring_palindrome){
				string current_substring = str.substr(start_level,
				current_level - start_level + 1);
				temp.push_back(current_substring);
				backtrack(str, temp, result, current_level + 1);
				temp.pop_back();
			}
		}
	}
}

vector<vector<string>> palindrome_partitioning(string str){
    vector<string> temp;
    vector<vector<string>> result;
    int start_level = 0;
    backtrack(str, temp, result, start_level);
    return result;
}

int main(){

    string str = { "aab" };

    vector<vector<string>> result = palindrome_partitioning(str);

    for (auto &row : result){
        cout << "[ ";
        for (auto _str : row){
            cout << _str << " ";
        }
        cout << " ]" << endl;;
    }

}