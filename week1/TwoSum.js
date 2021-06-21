/*
 * Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

样例
Example 1:

add(1); add(3); add(5);
find(4) // return true
find(7) // return false
 */


var twoSum = function(nums, target) {
    let index1 = 0;
    let index2 = 1;
    for (let i = 0; i < nums.length; i++) {
        let sub = target - nums[i];
        nums[i] = null;
        if (nums.includes(sub)) {
            index1 = i;
            index2 = nums.indexOf(sub);
            return [index1, index2];
        }
    }
};