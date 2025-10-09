/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let leftArray = []
    let midArray = []
    let rightArray = []
    for (let i = 0; i < nums.length; i++) {
        if (pivot > nums[i]) {
            leftArray.push(nums[i])
        }
        else if (pivot < nums[i]) {
            rightArray.push(nums[i])
        } else {
            midArray.push(nums[i])
        }
    }
    let result = [...leftArray, ...midArray, ...rightArray];
    return result;

};