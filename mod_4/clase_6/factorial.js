function factorial(x) {
    if(x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

let total = factorial(5);
console.log(total)