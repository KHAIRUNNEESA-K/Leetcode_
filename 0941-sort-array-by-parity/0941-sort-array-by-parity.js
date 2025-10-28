/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let arr1 = [];
    let arr2 = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            arr1.push(nums[i])
        }
        else {
            arr2.push(nums[i])
        }
    }
    result.push(...arr1, ...arr2);
    return result;
};