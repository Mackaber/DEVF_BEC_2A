let obj = {
    nombre: "Mackaber",
    edad: 34,
    materia: "Computacion"
}

// Destructurado

let { nombre, edad, materia } = obj
// Podemos traernos las propiedades que queramos
// let { nombre } = obj

console.log(nombre)
console.log(edad)
console.log(materia)

// Destructuración de Arreglos

let arreglo = ["Papaya", "Mandarina", "Mazana", "Uva"]

let [ fruta_1 ] = arreglo

console.log(fruta_1)

let [ , , ,fruta4 ] = arreglo
console.log(fruta4)

let [ fruta_pos_0, fruta2 ] = arreglo
console.log(fruta_pos_0)
console.log(fruta2)