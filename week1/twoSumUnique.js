/*
 * Given an array of integers, find how many unique pairs in the array such that their sum is equal to a specific target number. Please return the number of pairs.

样例
Example 1:

Input: nums = [1,1,2,45,46,46], target = 47 
Output: 2
Explanation:

1 + 46 = 47
2 + 45 = 47

Example 2:

Input: nums = [1,1], target = 2 
Output: 1
Explanation:
1 + 1 = 2
 */
var twoSumUnique = function (nums, target) {
    let set = new Set();
    let seen = new Set();
    let count = 0;
    for (let num of nums) {
        if (set.has(target - num) && !seen.has(num)) {
            count++;
            seen.add(num);
            seen.add(target - num);
        }
        else if (!set.has(num)) {
            set.add(num);
        }
    }
    return count;
}

