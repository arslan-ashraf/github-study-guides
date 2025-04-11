#include <iostream>
#include <unordered_map>

using namespace std;

int length_longest_substring_without_repeat(std::string str){
	std::unordered_map<char, int> hashmap;
	int max_length = 0;
	int left = 0;

	for (int right = 0; right < str.length(); right++){
		while (hashmap[str[right]]){
			hashmap.erase(str[left]);
			left += 1;
		}
		max_length = std::max(max_length, right - left + 1);
		hashmap[str[right]] = right;
	}
	return max_length;
}

int main(){

	std::string str = "abscsdlkjaax";

	// result = 7 and string is "csdlkja"
	int result = length_longest_substring_without_repeat(str); 
	cout << "result = " << result << endl;

}