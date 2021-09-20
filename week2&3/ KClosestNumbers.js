/*
 * Given target, a non-negative integer k and an integer array A sorted in ascending order, find the k closest numbers to target in A, sorted in ascending order by the difference between the number and target. Otherwise, sorted in ascending order by number if the difference is same.
Example

Example 1:

Input: A = [1, 2, 3], target = 2, k = 3
Output: [2, 1, 3]

Example 2:

Input: A = [1, 4, 6, 8], target = 3, k = 3
Output: [4, 1, 6]

Challenge

O(logn + k) time
Notice

    The value k is a non-negative integer and will always be smaller than the length of the sorted array.
    Length of the given array is positive and will not exceed 10410^410​4​​
    Absolute value of elements in the array will not exceed 10410^410​4​​


 */

//Brute Force
var kClosestNumbers = function (nums, k, x) {
    const compare = function (a, b) {
        if (Math.floor(a - x) < Math.floor(b - x)) {
            return -1;
        }
        else if (Math.floor(a - x) === Math.floor(b - x) && a < b) {
            return -1
        }
        return 1;
    }
    nums.sort(compare);
    return nums.slice(0, k).sort((a, b) => a - b);
}

//Binary Search
var kClosestNumbers_bSearch = function (nums, k, x) {
    let left = 0;
    let right = nums.length - 1;
    //find the left bound
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // move left pointer when nums[mid + k] is closer to x;
        // if we know nums[mid] is closer to x, 
        // then all numbers to the right of nums[mid + k] is discarded, including nums[mid + k]
        // because we know nums[mid] should be in our final result, and we only need k numbers;
        // if we inlude any number to the right of nums[mid + k], then we will have more than k numbers.
        // e.g nums = [1, 2, 3, 4, 5, 6, 7, 8, 9],  k = 3
        //             l          mid   [x]    r
        //                             nums[mid + k] = 8, closer to 7 than nums[mid] = 5
        //                             since there are k elements between (mid + k) and mid,
        //                             so we can safely discard all elements from 0 to mid;
        if (x - nums[mid] > nums[mid + k] - x) {
            left = mid + 1;
        }
        // move right pointer when nums[mid] is closer to x;
        // similarly, if we know nums[mid + k] is closer to x;
        // then we can safely discard all numbers to the left of nums[mid]
        else {
            right = mid;
        }
    }
    return nums.slice(left, left + k);
}
