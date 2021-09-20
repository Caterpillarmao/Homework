//How many times the array change directions + 1
//# list1 = [1, 2, 3, 4, 5]  return 1
//# list2 = [1, 2, 3, 2] return 2
//# list3 = [1, 1, 1] return 1
//# list4 = [5, 4, 3] return 1

/*
 * 1 2 3 4 5 return 1
 * 1 2 3 2 return 2 because 1 2 3 is increase order 3 2 is decrease
 * 1 1 1 return 1
 */

var countDirections = function (nums) {
    let dir = 1;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            dir += 1;
        }
        else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
            dir += 1;
        }
    }
    return dir;
}