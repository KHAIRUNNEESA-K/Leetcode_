var uniqueOccurrences = function(arr) {
    let arrObj={}
for(let i=0;i<arr.length;i++){
    let newArr=arr[i]
    if(arrObj[newArr]){
        arrObj[newArr]++
    }
    else{
        arrObj[newArr]=1
    }
}
let newObj={}
for(i in arrObj){
   let freq=arrObj[i]
    if(!newObj[freq]){
        newObj[freq]=true
    }
    else{
        return false
            }
}
return true
};