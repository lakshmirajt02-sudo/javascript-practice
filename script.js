let arr = [10,20,30]
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum);


let strg = "hELLO"
let count = 0;
for( let itm of strg.toLowerCase()){
    if(itm =="a" || itm == "e" || itm == "i" || itm =="o" || itm == "u"){
        count++
    }  
}
console.log(count);


let str = "hello"
let vowels = 'aeiou'
let countt = 0;
for(let itm of str){
    if(vowels.includes(itm)){
        countt++
    }
}
console.log(countt);

//Check pallindrome
function palin(str){
    let rev = str.split('').reverse().join('')
    console.log(rev);
    return str === rev
}
console.log(palin('malayalam'))






