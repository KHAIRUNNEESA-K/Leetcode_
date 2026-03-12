/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
    let a = num.toString();
    let b = " ";

    for (let i = a.length - 1; i >= 0; i--) {
        b += a[i]
    }
    let s = parseInt(b)
    let m = s.toString();
    let h = "";

    for (let j = m.length - 1; j >= 0; j--) {
        h += m[j]
    }
    let n = parseInt(h)

    if (num == h) {
        return true;
    }
    else{
        return false;
    }
    };