// Create a new string adding "Py" in front of a given string

let str='apple';
function newStrwithpy(str){
    let newStr='';
  if(str[0] !='p' && str[1] !='y'){
     newStr="py"+newStr+str;
  }else{
    newStr+=str;
  }
    
return newStr;
}
console.log(newStrwithpy(str));