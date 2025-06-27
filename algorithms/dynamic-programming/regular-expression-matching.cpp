#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool backtrack(string &str, 
			   string &pattern, 
			   unordered_map<string, bool> &memo,
			   int str_idx, 
			   int pattern_idx){

	if (str_idx >= str.length() && pattern_idx >= pattern.length()) return true;
	if (str_idx < str.length() && pattern_idx >= pattern.length()) return false;

	string index_key = std::to_string(str_idx) + "," + std::to_string(pattern_idx);
	if (memo.find(index_key) != memo.end()) return memo[index_key];

	bool is_match = str_idx < str.length() && 
					((str[str_idx] == pattern[pattern_idx]) || (pattern[pattern_idx] == '.'));

	if ((pattern_idx + 1) < pattern.length() && pattern[pattern_idx + 1] == '*'){
        bool dont_use_star = backtrack(str, pattern, memo, str_idx, pattern_idx + 2);
        memo[index_key] = dont_use_star;

		bool use_star;
		if (is_match){
			use_star = backtrack(str, pattern, memo, str_idx + 1, pattern_idx);
		}

		memo[index_key] = (dont_use_star || (is_match && use_star));
		return memo[index_key];
	}

	if (is_match){
		memo[index_key] = backtrack(str, pattern, memo, str_idx + 1, pattern_idx + 1);
		return memo[index_key];
	}

	memo[index_key] = false;
    return false;
}

bool regular_expression_matching(string &str, string &pattern){
	unordered_map<string, bool> memo;
	int str_idx = 0;
	int pattern_idx = 0;
	bool result = backtrack(str, pattern, memo, str_idx, pattern_idx);
	return result;
}

int main(){

	string str = "aab";
	string pattern = "c*a*b";

	bool result = regular_expression_matching(str, pattern);

	cout << "result: " << boolalpha << result << endl;

}