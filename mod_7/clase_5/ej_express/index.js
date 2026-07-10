// import express from 'express' // ES6

// Paso 3. Incluír ExpressJS
const express = require('express') // commonJS
const app = express()

// Paso 4. Incluír el elemento intermediario (middleware) para JSON
app.use(express.json()) // middleware

// Paso 6. Definir una petición esperada
// app.get("/<ruta>", (request, response) => { ... })

app.get("/casas", (request, response) => {
    console.log(request.query) // sort=asc&s=Carranza

    response.send("Hola mundo!")
})

app.post("/casas", (request, response) => {
    console.log(request.body) // { "pisos": 3 }

    response.send("Hola mundo!")
})

// Paso 5. Iniciar el proceso de Express
// app.listen(puerto, callback)
app.listen(3000, () => {
    console.log("ej_express corriendo en el puerto 3000")
})