/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj={}
for(let i=0;i<nums.length;i++){
    let num=nums[i]
    if(obj[num]){
        obj[num]++
    }
    else{
        obj[num]=1
    }
}
let duplicate=[]
for(let i in obj){
   if(obj[i]>1){
       duplicate.push(Number(i))
   }
}
return duplicate;
};