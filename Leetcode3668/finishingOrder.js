var recoverOrder = function(order, friends) {
    let finishingOrder=[]
for(let i=0;i<order.length;i++){
    for(let j=0;j<friends.length;j++){
        if(order[i] == friends[j]){
            finishingOrder.push(order[i])
        }
    }
}
return finishingOrder;
};