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


var longestPalindrome = function(s) {
    let res = 0;
    let odd = 0;
    let tmp = '';
    let cur;
    for (let i = 0; i < s.length; i++) {
        if (!tmp.includes(s[i])) {
            tmp += s[i];
            cur = s.split(s[i]).length - 1;
            res += cur;
            if (cur % 2 == 1) {
                odd = 1;
                res -= 1;
            }
            console.log(res)
        }
    }
    return res + odd;
};