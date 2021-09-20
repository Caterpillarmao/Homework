/*
 * For a given source string and a target string, you should output the first index(from 0) of target string in source string.

If target does not exist in source, just return -1.

样例
Example 1:

Input: source = "source" ，target = "target"
Output: -1	
Explanation: If the source does not contain the target content, return - 1.
Example 2:

Input:source = "abcdabcdefg" ，target = "bcd"
Output: 1	
Explanation: If the source contains the target content, return the location where the target first appeared in the source.
挑战
O(n2) is acceptable. Can you implement an O(n) algorithm? (hint: KMP)

说明
Do I need to implement KMP Algorithm in a real interview?

Not necessary. When you meet this problem in a real interview, the interviewer may just want to test your basic implementation ability. But make sure you confirm with the interviewer first.
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let j = 0;
        while (j < needle.length) {
            if (needle[j] !== haystack[j + i]) {
                break;
            }
            j += 1;
        }
        if (j === needle.length) {
            return i;
        }

    }
    return -1;
};