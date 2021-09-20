/*
 * Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

样例
Example 1

Input : [1, 0, 1, 2]
Output : [0, 1, 1, 2]
Explanation : sort it in-place
挑战
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?

注意事项
You are not suppose to use the library's sort function for this problem.
You should do it in-place (sort numbers in the original array).
 */
var sortColors = function (nums) {
    let p0 = 0;
    let p2 = nums.length - 1;
    let curr = 0;
    while (curr <= p2) {
        if (nums[curr] === 0) {
            let tmp = nums[curr];
            nums[curr] = nums[p0];
            nums[p0] = tmp;
            p0 += 1;
            curr += 1
        }
        else if (nums[curr] === 2) {
            let tmp = nums[curr];
            nums[curr] = nums[p2];
            nums[p2] = tmp;
            p2 -= 1;
        }
        else {
            curr += 1;
        }
    }
    return
};