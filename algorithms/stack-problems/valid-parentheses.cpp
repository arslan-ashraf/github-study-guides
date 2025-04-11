#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool valid_parentheses(string parentheses){
	vector<char> stack;
    unordered_map<char, char> _map = { {')', '('}, {'}', '{'}, {']', '['} };
    for (int i = 0; i < parentheses.length(); i++){
        if (parentheses[i] == '(' || parentheses[i] == '[' || parentheses[i] == '{'){
            stack.push_back(parentheses[i]);
		} else {
			char last_element;
            if (stack.size() > 0){
                last_element = stack[stack.size() - 1];
				stack.pop_back();
			} else {
                return false;
			}

            if (_map[parentheses[i]] != last_element)
                return false;
		}
	}
	return stack.size() == 0 ? true : false;
}

int main(){

	string parentheses = "([{}])[]";

	bool result = valid_parentheses(parentheses);

	cout << "result: " << boolalpha << result << endl;

}