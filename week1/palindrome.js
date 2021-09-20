/*
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

样例
Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama"
Example 2:

Input: "race a car"
Output: false
Explanation: "raceacar"
挑战
O(n) time without extra memory.

注意事项
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let nums = '0123456789';
    while (left <= right) {
        while (left <= right && alpha.indexOf(s[left]) === -1 && nums.indexOf(s[left]) === -1) {
            left += 1;
        }
        while (left <= right && alpha.indexOf(s[right]) === -1 && nums.indexOf(s[right]) === -1) {
            right -= 1;
        }
        if (left <= right && s[left] !== s[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
};