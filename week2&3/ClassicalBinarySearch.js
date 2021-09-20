/*
 * Find any position of a target number in a sorted array. Return -1 if target does not exist.
Example

Example 1:

Input: nums = [1,2,2,4,5,5], target = 2
Output: 1 or 2

Example 2:

Input: nums = [1,2,2,4,5,5], target = 6
Output: -1

Challenge

O(logn) time

 */

var binarySearch = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    if (nums[left] === target) {
        return left;
    }
    if (nums[right] === target) {
        return right;
    }
    return -1;
}