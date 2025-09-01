var stableMountains = function(height, threshold) {
    let stableMountains=[];
for(let i=1;i<height.length;i++){
    if(height[i-1]>threshold){
        stableMountains.push(i)
    }
}
return stableMountains;
    
};