var leftRightDifference = function(nums) {
    let sum=0;
let leftSum=[];
let rightSum=[]
let rsum=0
let answer=[]

for(let i=0; i<nums.length;i++){
    leftSum.push(sum);
    sum+=nums[i]
}
for(let i=nums.length-1; i>=0 ;i--){
    rightSum[i]=rsum;
    rsum+=nums[i]
}
for(let i=0;i<nums.length;i++){
    if(leftSum[i] > rightSum[i]){
        answer.push(leftSum[i] - rightSum[i])
    }
    else{
        answer.push(rightSum[i] - leftSum[i])
    }
}
return answer;
};