/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i];
        let str = nums[i].toString().split("")
        for (let j = 0; j < str.length; j++) {
            sum2 += Number(str[j]);
        }
    }
    let sumDifference = sum1 - sum2;
    return sumDifference;
};