//reverse a string without using reverse()

function revStrng(str){
   let res= "";
   for (let i=str.length-1; i>=0; i--){
      res+=str[i];
   }
   return res;
}

console.log( revStrng('Welcome'));

//factorial of a number
const factorial = (n)=>{
let result = 1;
for(let i=2; i<=n ; i++){
   result *= i ;
}
return result;
}
console.log(factorial(5));


//remove duplicates from an array
let nums = [ 1,2,3,3,4,5,7,5]
const remDuplicate=(ar)=>{
   return ar.filter((itm, index)=> ar.indexOf(itm)===index)
}
console.log(remDuplicate(nums));
