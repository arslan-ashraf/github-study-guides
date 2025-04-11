#include <iostream>

using namespace std;

int maximum_subarray_sum(int nums[], int nums_length){
	int local_max = nums[0];
    int global_max = nums[0];
    
    for (int i = 1; i < nums_length; i++){
        local_max = max(nums[i], nums[i] + local_max);
        global_max = max(global_max, local_max);
	}
    return global_max;
}

int main(){
	
	int nums[] = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
	int nums_length = std::size(nums);

	int result = maximum_subarray_sum(nums, nums_length);

	cout << "result: " << result << endl;

}