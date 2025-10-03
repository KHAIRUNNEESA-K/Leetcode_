var interpret = function(command) {
    let i=0;
let result="";
while(i<command.length){
  if(command.slice(i,i+1) == "G"){
     result+="G";
     i++;
  }
  else if(command.slice(i,i+2)=="()"){
      result+="o";
      i+=2;
  }
  else if(command.slice(i,i+4) == "(al)"){
      result+="al";
      i+=4
  }
}
return result;
};