const fs = require("fs") // Leer archivo
const express = require('express') // commonJS
const cors = require('cors') // Usar CORS para permitir peticiones desde el frontend
const app = express()

app.use(cors()) // CORS middleware
app.use(express.json()) // middleware

// Simular la db utilizando un arreglo
let db = []

// Para simular persitencia con archivos
let contents = ""
try {
 contents = fs.readFileSync("posts.json")
 db = JSON.parse(contents)
} catch(e) {
    // Crear el archivo si no existe
    fs.writeFileSync("posts.json", JSON.stringify(db))
}

// Metodos CRUD para posts

// C: Crear Post
app.post("/posts",(request, response) => {
    const post = request.body

    db.push(post) // Guardar en nuestra variable de db
    fs.writeFileSync("posts.json", JSON.stringify(db)) // Guardarlo de forma persistente en un archivo

    post.id = db.length - 1 // Asignar id al post creado
    
    response.send({
        ...post
    })
})

// R: Obtener todos los posts
app.get("/posts", (request, response) => {
    response.send(
        db.map((post, index) => ({
            id: index,
            title: post.title,
            content: post.content
        }))
    )
})

// R: Obtener un post específico
app.get("/posts/:id", (request, response) => {
    const { id } =  request.params
    response.send(
        db[id]
    )
})

// U: Modificar Post
app.put("/posts/:id", (request, response) => {
    const { id } =  request.params
    const post = request.body
    
    db[id] = post
    fs.writeFileSync("posts.json", JSON.stringify(db)) // Guardarlo de forma persistente en un archivo

    response.send({
        success: true,
    })
})

// D: Borrar post
app.delete("/posts/:id", (request, response) => {
    const { id } =  request.params
    
    db.splice(id, 1)
    fs.writeFileSync("posts.json", JSON.stringify(db)) // Guardarlo de forma persistente en un archivo

    response.send({
        success: true,
    })
})

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})