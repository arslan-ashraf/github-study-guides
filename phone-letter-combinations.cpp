#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

void backtrack(string str, 
			   unordered_map<int, string> &dictionary, 
			   string &temp, 
			   vector<string> &result,
			   int start_level){
	if (str.length() > 0 && temp.length() == str.length()) {
		result.push_back(temp);
	} else {
		for (int current_level = start_level; current_level < str.length(); current_level++){
			int phone_integer = static_cast<int>(str[current_level] - '0');
			string letters_at_phone_integer = dictionary[phone_integer];
			for (int j = 0; j < letters_at_phone_integer.length(); j++){
				temp += letters_at_phone_integer[j];
				backtrack(str, dictionary, temp, result, current_level + 1);
				temp.pop_back();
			}
		}
	}
}

vector<string> phone_letter_combinations(string str, unordered_map<int, string> &dictionary){
	string temp;
	vector<string> result;
	int start_level = 0;
	backtrack(str, dictionary, temp, result, start_level);
	return result;
}

int main(){

	unordered_map<int, string> dictionary = { {2, "abc"}, {3, "def"}, {4, "ghi"}, 
											  {5, "jkl"}, {6, "mno"}, {7, "pqrs"}, 
											  {8, "tuv"}, {9, "wxyz"} };
	string _str = "34";

	vector<string> result = phone_letter_combinations(_str, dictionary);

	cout << "[ ";
	for (auto str : result){
		cout << str << ", ";
	}
	cout << " ]" << endl;

}




