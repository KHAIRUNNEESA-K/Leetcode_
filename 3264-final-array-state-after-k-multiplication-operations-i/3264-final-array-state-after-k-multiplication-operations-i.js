/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    while(k > 0){
    let minIndex = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] < nums[minIndex]){
            minIndex = i;
        }
    }
    nums[minIndex] = nums[minIndex] * multiplier;
    k--;
}
return nums;
};