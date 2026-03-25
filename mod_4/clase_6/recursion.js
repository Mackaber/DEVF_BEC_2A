function fn(n) { // n = 1
    console.log(n)
    if(n > 5) {
        return n
    } else {
        return fn(n + 1) // fn(1)
    }
}

fn(0)