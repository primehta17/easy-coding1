// Check two given integers, whether one is positive and another one is negative

function checkposandneg(x,y){
   if((x > 0 && y < 0) || (x < 0 && y > 0)){
    return true;
   }else{
    return false;
   }
}
console.log(checkposandneg(4,5));
console.log(checkposandneg(4,-5));
console.log(checkposandneg(-4,5));
console.log(checkposandneg(-4,-5));