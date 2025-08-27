var kidsWithCandies = function(candies, extraCandies) {
    let kidWithCandies=[];
    let largestCandies=0;
for(let i=0;i<candies.length;i++){
    if(candies[i]>largestCandies ){
        largestCandies=candies[i]
    }
}
for(let j=0;j<candies.length;j++){
    if((candies[j]+extraCandies)>=largestCandies){
        kidWithCandies.push(true)
    }
    else{
        kidWithCandies.push(false)
    }
}
return kidWithCandies;
    
};
