// Check from three given numbers that two or all of them have the same rightmost digit

let arr=[77,57,9747];
function abclastdigit(arr){
   
    let a=arr[0]%10,b =arr[1]%10,c=arr[2]%10;
    console.log(a,b,c);
         if(a==b && b==c){
            console.log(true)
         }else{
            console.log(false);
         }
}
abclastdigit(arr);


