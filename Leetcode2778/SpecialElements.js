var sumOfSquares = function(nums) {
    let n=nums.length;
let sumOfSpecialElements=0;
for(let i=1;i<=n;i++){
    if(n%i == 0){
      sumOfSpecialElements+= (nums[i-1] * nums[i-1])
    }
}
return sumOfSpecialElements; 
    
};