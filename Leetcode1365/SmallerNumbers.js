var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let smallerNumbers = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        smallerNumbers++;
      }
    }
    arr.push(smallerNumbers);
  }
  return arr;
};
