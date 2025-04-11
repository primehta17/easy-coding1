// Replace every character in a given string with the character following it in the alphabet

let str ="JAVASCRIPT";

for(let i=0;i<str.length;i++){
console.log(String.fromCharCode(1+str[i].charCodeAt()))
}
