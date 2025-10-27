/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let arr = []
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        num = nums[i] * nums[i]
        arr.push(num)
    }
    arr.sort((a, b) => a - b)
    return arr;
};