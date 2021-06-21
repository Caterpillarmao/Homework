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

var isPalindrome = function(s) {
    let tmp = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    // console.log(tmp)
    let front = 0;
    let back = tmp.length-1;
    while (front < back) {
        if (tmp[front] != tmp[back]) return false;
        front = front + 1;
        back = back - 1;
    }
    return true;
};