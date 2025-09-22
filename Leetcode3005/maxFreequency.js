var maxFrequencyElements = function(nums) {
    let numOfElements={}
let maxFreequency=0
let sum=0

for(let i=0;i<nums.length;i++){
    let num=nums[i]
  if(numOfElements[num]){
      numOfElements[num]++
  }
  else{
      numOfElements[num]=1
  }
  if(numOfElements[num]>maxFreequency){
      maxFreequency=numOfElements[num]
  }
}
for (let key in numOfElements){
    if(numOfElements[key] === maxFreequency){
        sum+=numOfElements[key]
    }
}
return sum;
};