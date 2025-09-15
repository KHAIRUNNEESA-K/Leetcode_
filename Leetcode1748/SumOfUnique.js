var sumOfUnique = function(nums) {
    let numsObj={};
    let sum=0;
for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (numsObj[num]) {
        numsObj[num]++;
        if (numsObj[num] === 2) {
            sum -= num;
        }
    } else {
        numsObj[num] = 1;
        sum += num;
    }
}
return sum;
};