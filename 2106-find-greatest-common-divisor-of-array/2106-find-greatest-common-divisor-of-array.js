/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b)=>a-b)
let minNumber=nums[0];
let maxNumber=nums[nums.length-1];
let greatestDiv=0;
for(let i=1;i<=maxNumber;i++){
    if(minNumber % i == 0 && maxNumber % i == 0){
        greatestDiv = i;
    }
}
return greatestDiv;
};