var getSneakyNumbers = function(nums) {
    let arr=[]
for(let i=0;i<nums.length;i++){
    for(let j=i+1; j<nums.length;j++){
        if(nums[i]==nums[j]){
            arr.push(nums[i])
        }
    }
}return arr
};
console.log(getSneakyNumbers([1,2,3,3,4,4]));
