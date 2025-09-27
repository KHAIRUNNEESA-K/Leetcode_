var separateDigits = function(nums) {
    let newArr=[]
for(let i=0;i<nums.length;i++){
    let str=nums[i].toString()
    for(let j=0;j<str.length;j++){
        newArr.push(parseInt(str[j]))
    }
}
return newArr;
};