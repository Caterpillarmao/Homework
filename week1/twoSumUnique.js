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

var twoSum = function(numbers, target) {
  const set1 = new Set();
  const set2 = new Set();
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
  	console.log("now number is " + numbers[i]);
    if (set1.has(target - numbers[i]) && !set2.has(numbers[i])) {
      count ++;
      set2.add(numbers[i]);
      console.log("set2 add " + numbers[i]);
    }
    else if (!set1.has(numbers[i])) {
      set1.add(numbers[i]);
      console.log("set1 add " + numbers[i]);
    }
  }
  return count;
};