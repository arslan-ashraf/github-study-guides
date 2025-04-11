#include <iostream>
#include <cmath>

using namespace std;

int reverse_integer(int x){
	int result = 0;
    bool is_negative = x < 0;
    if (is_negative) x *= -1;

    while (x != 0){
        int right_digit = x % 10;
        result = 10 * result + right_digit;

        // in the event of an overflow
        if (result > (std::pow(2, 31) - 1) || result < -1 * std::pow(2, 31)) return 0;

        x = x / 10;
	}

    if (is_negative) result *= -1;
    return result;
}

int main(){

	int x = -6789;

	int result = reverse_integer(x);

	cout << "result: " << result << endl;

}