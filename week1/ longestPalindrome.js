/*
 *  Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Sample
Example 1:

Input : s = "abccccdd"
Output : 7
Explanation :
One longest palindrome that can be built is "dccaccd", whose length is `7`.

Assume the length of given string will not exceed 100000.
 */

var longestPalindrome = function (s) {
    let counter = {};
    let ans = 0;
    for (let char of s) {
        counter[char] = (counter[char] || 0) + 1;
        if (counter[char] % 2 === 0) ans += 2;
    }
    return s.length > ans ? ans + 1 : ans;
};