/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let sum = 0
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        let s = nums[i].toString().split("")
        for (let j = 0; j < s.length; j++) {
            sum += Number(s[j]);
        }
        newArr.push(sum);
        sum = 0;
    }
    newArr.sort((a, b) => a - b);
    return newArr[0]
};