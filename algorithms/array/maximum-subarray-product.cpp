#include <iostream>

using namespace std;

int maximum_subarray_product(int nums[], int nums_length){
	int local_min = nums[0];
	int local_max = nums[0];
    int global_max = nums[0];
    
    for (int i = 1; i < nums_length; i++){
		int temp_local_min = local_min;
		local_min = min(nums[i], min(nums[i] * local_max, nums[i] * local_min));
        local_max = max(nums[i], max(nums[i] * local_max, nums[i] * temp_local_min));
        global_max = max(global_max, max(local_min, local_max));
	}
    return global_max;
}

int main(){

	int nums1[] = { -2, 3, -4 };
	int nums1_length = std::size(nums1);

	int nums2[] = { -2, -3, 7 };
	int nums2_length = std::size(nums2);

	int result1 = maximum_subarray_product(nums1, nums1_length);
	int result2 = maximum_subarray_product(nums2, nums2_length);

	cout << "result 1: " << result1 << endl;
	cout << "result 2: " << result2 << endl;

}