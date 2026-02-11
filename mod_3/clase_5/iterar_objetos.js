let estudiante = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    curso: "Programación",
    info() {
        console.log(`${this.nombre} ${this.apellido} tiene ${this.edad} años y está en el curso de ${this.curso}`)
    }
}

estudiante.info()

for(key in estudiante) { // key = "edad"
    console.log(`La llave es: ${key}, y el valor es: ${estudiante[key]}`)
}

// Es equivalente a...

console.log(`La llave es: ${"nombre"}, y el valor es: ${estudiante["nombre"]}`)
console.log(`La llave es: ${"apellido"}, y el valor es: ${estudiante["apellido"]}`)
console.log(`La llave es: ${"edad"}, y el valor es: ${estudiante["edad"]}`)
console.log(`La llave es: ${"curso"}, y el valor es: ${estudiante["curso"]}`)