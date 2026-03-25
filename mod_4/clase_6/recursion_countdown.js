function countdown(n) {
    console.log(n)
    if(n === 0) {
        return
    } else {
        return countdown(n - 1) // n--
    }
}

countdown(2)