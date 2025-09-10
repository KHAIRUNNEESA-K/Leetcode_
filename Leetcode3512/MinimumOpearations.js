var minOperations = function(nums, k) {
    let sumOfNums = 0;
let numOfOperations= 0;
for(let i=0 ;i<nums.length ;i++){
    sumOfNums+=nums[i]
}

while(sumOfNums % k !=0){
    sumOfNums--
    numOfOperations++
}
return numOfOperations;
};