/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y=x.toString()
    let z=y.split('').reverse().join('')
    if(z==x){
        return true;
    }else{
        return false;
    }
}
isPalindrome(123)
isPalindrome(-121)
isPalindrome(10)

