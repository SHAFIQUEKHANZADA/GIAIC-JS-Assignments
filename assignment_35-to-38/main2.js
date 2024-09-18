let val = Number(prompt("Enter a number:", "5"));

function fact(x) {
    if(x === 0 || x ===1) {
        return 1
    } else {
        let result = 1;
        for (let i = x; i > 1; i--) {
            result *= i; 
        }
        return result;
    }
}

let factorial = fact(val);

 
console.log(`Factorial of ${val} is: ${factorial}`);