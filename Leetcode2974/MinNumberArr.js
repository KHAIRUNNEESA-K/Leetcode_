var numberGame = function(nums) {
    let minNumber=[];
nums.sort((a,b)=>a-b)
for(let i=0;i<nums.length;i+=2){
    minNumber.push(nums[i + 1],nums[i])
}
return minNumber
};