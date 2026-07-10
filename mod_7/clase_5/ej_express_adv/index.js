// import express from 'express' // ES6

// Paso 3. Incluír ExpressJS
const express = require('express') // commonJS
const app = express()

app.use(express.json()) // middleware

app.delete("/casas", (request, response) => {
    response.send("Se borraron todas las casas satisfactoriamente")
})

// Mock response
app.get("/casas", (request, response) => {
    response.send(
        {
            "casas": [
                {
                    "id": 1,
                    "nombre": "Casa de la esquina",
                    "pisos": 2
                },
                {
                    "id": 2,
                    "nombre": "Casa de la avenida",
                    "pisos": 3
                }
            ]
        }
    )
})

// Echo response
app.post('/echo', (request, response) => {

    console.log(request.body)

    response.send({
        headers: request.headers,
        query: request.query,
        body: request.body,
        bin: Buffer.from(JSON.stringify(request.body ?? {}), 'utf8').toString('base64')
    })
})

// Paso 5. Iniciar el proceso de Express
// app.listen(puerto, callback)
app.listen(3000, () => {
    console.log("ej_express_adv corriendo en el puerto 3000")
})