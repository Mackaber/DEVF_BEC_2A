let prom = new Promise((resolve, reject) => {
    resolve("De vuelta")
})

// Esto...
prom.then((res) => {
    console.log(res)
})

// Es equivalente a esto...
const fn = async () => {
    let res = await prom
    console.log(res)
}

fn()
