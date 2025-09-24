var findDisappearedNumbers = function(nums) {
    let arr=[];
let numsObj={};
for(let i=0;i<nums.length;i++){
    numsObj[nums[i]]=true;
}
for(let i=1;i<=nums.length;i++){
    if(!numsObj[i]){
        arr.push(i)
    }
}
return arr;
};