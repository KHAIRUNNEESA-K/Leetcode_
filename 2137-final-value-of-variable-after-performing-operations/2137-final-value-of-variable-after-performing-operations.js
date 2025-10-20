/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let finalValueOfOperations=0;
for(let i=0;i<operations.length;i++){
  if(operations[i]==="X++" || operations[i]==="++X"){
      finalValueOfOperations++;
  }
  else if(operations[i]==="X--" || operations[i]==="--X"){
      finalValueOfOperations--;
  }
}
return finalValueOfOperations;
};