var countPairs = function(nums, target) {
    let numOfPairs=0
for(i=0;i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]<target){
            numOfPairs++
        }
    }
}
return numOfPairs
    
};