const express = require('express') // commonJS
const app = express()

app.use(express.json()) // middleware


function calcular(operation, A, B) {
    switch(operation) {
        case "restar":
            return  A - B
        case "sumar":
            return A + B
        case "multiplicar":
            return A * B
        case "dividir":
            return A / B
    }
}

// Utilizando url params

// POST http://localhost:3000/sumar/4/3

app.post("/:operation/:valA/:valB", (request, response) => {
    const { operation, valA, valB } = request.params

    const result = calcular(operation, Number(valA), Number(valB))

    response.send({
        "result": ` Resultado de ${operation} entre ${valA} y ${valB} = ${result}`
    })
}) 


// Utilizar POST body

// POST http://localhost:3000/calcular
// {
//    "operation": "restar",
//    "valA": 7,
//    "valB": 3
// }

app.post("/calcular", (request, response) => {
    const { operation, valA, valB } = request.body

    const result = calcular(operation, Number(valA), Number(valB))

    response.send({
        "result": ` Resultado de ${operation} entre ${valA} y ${valB} = ${result}`
    })
})

// Utilizar query params
// /calcular?operation=multiplicar&valA=2&val2=5

app.get("/calcular", (request, response) => {
    const { operation, valA, valB } = request.query

    const result = calcular(operation, Number(valA), Number(valB))

    response.send({
        "result": ` Resultado de ${operation} entre ${valA} y ${valB} = ${result}`
    })
})

app.get("/test", (request, response) => {
    response.send(
        JSON.stringify(request)
    )
})


app.listen(3000, () => {
    console.log("ej_express corriendo en el puerto 3000")
})