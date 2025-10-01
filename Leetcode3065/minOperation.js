var minOperations = function(nums, k) {
    let noOfElements=0
for(let i=0;i<nums.length;i++){
    if(nums[i]<k){
     noOfElements++   
    }
}
return noOfElements;
};
