/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let position = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            position.push(i);
        }
    }

    if (position.length === 0) {
        return [-1,-1]
    }
    return [position[0],position[position.length-1]];
};