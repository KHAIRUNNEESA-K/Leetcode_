let arr=[700,1,22,555,200,800,150,750]
let LargestNumber=0
let secondLargest=0;
for(i=0;i<arr.length;i++){
   if(arr[i]>LargestNumber){
       secondLargest=LargestNumber
       LargestNumber=arr[i]
   }
       else if(arr[i]>secondLargest && arr[i]<LargestNumber){
           secondLargest=arr[i]
       }
}
 console.log(secondLargest)