let persona = {
    nombre: "Mackaber",
    edad: 34,
    materia: "Computacion"
}

persona.apellido = "Witckin"

console.log(persona)

let nombre = Symbol("nombre")
let edad = Symbol("edad")
let materia = Symbol("materia")

persona2 = {}

persona2[nombre] = "Ana"
persona2[edad] = 30
persona2[materia] = "Diseño"
// persona2[apellido] = "Sanchez" Esta parte no funciona

console.log(persona2)