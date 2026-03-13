// Every 

let numeros = [2, 4, 6, 8]
const todosPares = numeros.every(elemento => elemento % 2 === 0)
console.log(todosPares)

let arr = ["A", "B", "C", "D"]
const todosStrings = arr.every(elemento => typeof elemento === "string")
console.log(todosStrings)

// Some

numeros = [1, 2, 3, 4, 5]
const hayPares = numeros.some(elemento => elemento % 2 === 0)
console.log(hayPares)

arr = ["A", "B", "C", "D"]
const hayNumeros = arr.some(elemento => typeof elemento === "number")
console.log(hayNumeros)

// Includes

let nombres = ["Ana", "Juan", "Pedro"]
let incluyeJuan = nombres.includes("Juan")
console.log(incluyeJuan)

// Equivalente en some...
incluyeJuan = nombres.some(elemento => elemento === "Juan")
console.log(incluyeJuan)


// Reduce
console.log("Reduce....")
numeros = [1, 2, 3, 4]
const suma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

numeros.reduce(function (acumulador, elemento){
    return acumulador + elemento
}, 0)

const funcion_de_acumulacion = (acumulador, elemento) => {
    return acumulador + elemento
}

numeros.reduce(funcion_de_acumulacion, 0)

// Equivilante a...
let acumulador = 0
for(let i = 0; i<numeros.length;i++) {
    acumulador = acumulador + numeros[i]
}
console.log(acumulador)
console.log(suma)

// Ejemplo de reduce, imitando a "join"

arr = ["A", "B", "C", "D"]
let result = arr.reduce((acumulador, elemento) => acumulador += elemento + " ", " ")
console.log(result)

// Valor máximo

arr = [1, 4, 8, 2, 99, 3, 7]
let max = arr.reduce((antes,elemento) => {
    if(antes > elemento) {
        return antes
    } else {
        return elemento
    }
},0)
console.log(max)

// Versión compacta
max = arr.reduce((antes,elemento) => antes > elemento ? antes : elemento)
console.log(max)