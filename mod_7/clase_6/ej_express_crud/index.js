const fs = require("fs") // Leer archivo
const express = require('express') // commonJS
const app = express()

app.use(express.json()) // middleware

// Simular la db utilizando un arreglo
let db = []

// Para simular persitencia con archivos
let contents = ""
try {
 contents = fs.readFileSync("games.json")
 db = JSON.parse(contents)
} catch(e) {
    fs.writeSync("games.json", "")
}

// C: Crear Juego
app.post("/games",(request, response) => {
    const game = request.body

    db.push(game) // Guardar en nuestra variable de db
    fs.writeFileSync("games.json", JSON.stringify(db)) // Guardarlo de forma persistente en un archivo

    response.send({
        success: true,
        id: db.indexOf(game)
    })
})

// R: Obtener todos los juegos
app.get("/games", (request, response) => {
    response.send(
        db
    )
})

// R: Obtener un juego específico
app.get("/games/:id", (request, response) => {
    const { id } =  request.params
    response.send(
        db[id]
    )
})

// U: Modificar Juego
app.put("/games/:id", (request, response) => {
    const { id } =  request.params
    const game = request.body
    
    db[id] = game
    fs.writeFileSync("games.json", JSON.stringify(db)) // Guardarlo de forma persistente en un archivo

    response.send({
        success: true,
    })
})

// D: Borrar juego
app.delete("/games/:id", (request, response) => {
    const { id } =  request.params

    db.splice(id,1)
    fs.writeFileSync("games.json", JSON.stringify(db)) // Guardarlo de forma persistente en un archivo

    response.send({
        success: true,
    })
})


app.listen(3000, () => {
    console.log("ej_express corriendo en el puerto 3000")
})