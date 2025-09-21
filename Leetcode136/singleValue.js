var singleNumber = function(nums) {
    let Duplicate={}
for(let i=0;i<nums.length;i++){
    let num=nums[i]
    if(Duplicate[num]){
        Duplicate[num]++
    }
    else{
        Duplicate[num]=1
    }
}

for (let i = 0; i < nums.length; i++) {
    if (Duplicate[nums[i]] === 1) {
        singleValue = nums[i];
        break;
    }
    
}
return singleValue;
};