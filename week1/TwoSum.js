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
var twoSum = function (nums, target) {
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        let rem = target - nums[i];
        if (hashmap[rem] !== undefined) {
            return [hashmap[rem], i];
        }
        hashmap[nums[i]] = i;
    }
    return [-1, -1];
};