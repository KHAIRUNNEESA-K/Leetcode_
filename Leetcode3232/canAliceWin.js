var canAliceWin = function(nums) {
    let singleDigit = 0;
let doubleDigit = 0;
for(let i=0; i<nums.length; i++){
    if(nums[i] >=0 && nums[i]<=9){
        singleDigit+=nums[i]
    }
    else{
        doubleDigit+=nums[i]
    }
}
if(singleDigit > doubleDigit){
    return true;
}
else if(doubleDigit > singleDigit){
    return true;
}
return false
};