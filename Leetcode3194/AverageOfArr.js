var minimumAverage = function(nums) {
    let average=[]
let minElementOfAverage=Infinity;
nums.sort((a,b)=>a-b)
left=0;
right=nums.length-1;
while(left<right){
    average.push((nums[left]+nums[right])/2)
    left++;
    right--;
}

for(i=0;i<average.length;i++){
    if(average[i]<minElementOfAverage){
        minElementOfAverage=average[i]
    }
}
return minElementOfAverage;
};