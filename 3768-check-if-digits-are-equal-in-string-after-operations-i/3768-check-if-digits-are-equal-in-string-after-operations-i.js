/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while(s.length > 2){
    let temp="";
    for(let i=0;i<s.length-1;i++){
        let a=Number(s[i]);
        let b=Number(s[i+1]);
        let c=(a+b) % 10
        temp+=c.toString()
    }
    s=temp
}
return s[0] == s[1]
};