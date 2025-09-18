var returnToBoundaryCount = function(nums) {
    let antPosition=0
let numOfTime=0
for(let i=0;i<nums.length;i++){
    antPosition+=nums[i]
    if(antPosition === 0){
        numOfTime++
    }
}
return numOfTime;
};