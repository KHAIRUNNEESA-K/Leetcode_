var sortPeople = function(names, heights) {
   let personalDetails = {}
for(let i=0;i<names.length ; i++){
    personalDetails[heights[i]]=names[i]
 }
     heights.sort((a,b)=>b-a)
     for(let i=0; i<names.length; i++){
        names[i]=personalDetails[heights[i]]
     } 
     return names;
};