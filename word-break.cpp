#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>

using namespace std;

bool backtrack(string &str, 
			   vector<string> &word_list, 
			   unordered_set<string> &word_set, 
			   unordered_map<string, bool> memo){
	if (memo[str]) return memo[str];
	if (str.length() == 0) {
		return true;
	} else {
		for (int current_level = 0; current_level < str.length(); current_level++){
			string left_substring = str.substr(0, current_level + 1);
			if (word_set.find(left_substring) != word_set.end()){
				string right_substring = str.substr(current_level + 1);
				bool right_part = backtrack(right_substring, word_list, word_set, memo);
				memo[right_substring] = right_part;
				if (right_part == true) return true;
			}
		}
	}
	memo[str] = false;
	return false;
}

bool word_break(string str, vector<string> &word_list){
	unordered_set<string> word_set;
	word_set.insert(word_list.begin(), word_list.end());
	unordered_map<string, bool> memo;
	bool result = backtrack(str, word_list, word_set, memo);
	return result;
}

int main(){

	vector<string> word_list = { "apple", "pen" };
	string _str = "applepenapple";

	bool result = word_break(_str, word_list);

	cout << "result: " << boolalpha << result << endl;

}



