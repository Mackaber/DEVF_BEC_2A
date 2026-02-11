// Objetos

// Sintaxis

let obj =  {
    llave1: "valor1",
    llave2: "valor2"
}

// Ejemplo

let persona = {
    nombre:  "Mackaber",
    edad: 35,
    profesion: "Programador",
    tel: 44671555
}

console.log(persona)

// Accediendo al nombre
console.log("Nombre: ", persona.nombre)

// Otra forma de acceder a las propiedades [ ]
console.log("Edad: ", persona["edad"])

// Manipulando edad (por ejemplo)
console.log("Cumpleaños: ", 2026 - persona.edad)

// Modificando el telefono
persona.tel = "44671555"

console.log(persona.tel)


// Agregar una propiedad
persona.ciudad = "SLP"

console.log(persona.ciudad)
console.log(persona)

// Métodos 

// Funciones específicas de los objetos

let libro = {
    titulo: "1984",
    autor: "Orwell",
    info() {
        console.log(`${this.titulo} de ${this.autor}`)
    }
}

libro.info()


let libro2 = {
    titulo: "Cumbres Borrascosas",
    autor: "Emily Bronthe",
    info() {
        console.log(this.titulo)
    }
}

libro2.info()