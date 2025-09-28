var countDistinctIntegers = function(nums) {
    let newArr=[]
let freq={}
for(let i=0;i<nums.length;i++){
    let str=nums[i].toString();
    let reverseStr=str.split("").reverse().join("");
    newArr.push(nums[i],parseInt(reverseStr));
}
for(let i=0;i<newArr.length;i++){
    let num=newArr[i]
    if(!freq[num]){
        freq[num]=true
    }
}
return Object.keys(freq).length;
};