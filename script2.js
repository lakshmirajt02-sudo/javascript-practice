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