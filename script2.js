// chech if number is prime 
function isPrime(num) {
    if (num <= 1) {
        console.log(num, " is not prime");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(num, " is not prime");
         return;
        }
    }
    console.log(num, " is prime");
}
isPrime(9); 
isPrime(7);  

//Largest number in array

const findLargest=(ar)=>{
    let large = ar[0]
    for(let i = 0; i<ar.length-1 ; i++){
        if(ar[i] > large){
            large = ar[i];
        }
    }
    console.log("largest number is " , large );
    
}
findLargest([3,5,8,2,96,4])