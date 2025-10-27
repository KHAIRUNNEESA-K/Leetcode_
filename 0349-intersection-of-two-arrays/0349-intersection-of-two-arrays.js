/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let obj = {}
    let arr = []
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i];
        obj[num] = true;
    }
    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i]
        if (obj[num]) {
            arr.push(num)
            obj[num] = false
        }
    }
    return arr;
};