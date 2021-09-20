/*
 * Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

样例
Example1

Input: root = {5,4,9,2,#,8,10} and target = 6.124780
Output: 5
Explanation：
Binary tree {5,4,9,2,#,8,10},  denote the following structure:
        5
       / \
     4    9
    /    / \
   2    8  10
Example2

Input: root = {3,2,4,1} and target = 4.142857
Output: 4
Explanation：
Binary tree {3,2,4,1},  denote the following structure:
     3
    / \
  2    4
 /
1
注意事项
Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
 */

var cloestValue = function (root, target) {
  if (root === null) {
    return null;
  }
  let node = root;
  let minDiff = Infinity;
  let result = null;
  while (node !== null) {
    if (node.val - target === 0) {
      return node.val;
    }
    if (Math.abs(node.val - target) < minDiff) {
      minDiff = Math.abs(node.val - target);
      result = node.val
    }
    if (node.val > target) {
      node = node.left;
    }
    else {
      node = node.right;
    }
  }
  return result;
}