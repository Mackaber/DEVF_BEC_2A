// Funciones como parametros
const myfn = (otra_fn) => {
        const retorn_de_otra_fn = otra_fn()
        return retorn_de_otra_fn
}

const la_otra_fn = () => {
    return "Prueba"
} 

console.log(myfn(la_otra_fn))
console.log(myfn(() => { return "Otra cosa"}))
console.log(myfn(() => "Otra cosa"))


// Find -> NO modifica el arreglo
const numeros = [1, 5, 10, 15]

let encontrado = numeros.find((elemento) => { return elemento > 9 })
    encontrado = numeros.find(elemento => elemento > 9) // La funciona anonima regrese verdadero o falso

console.log(encontrado)

encontrado = numeros.find(() => true)

console.log(encontrado)

encontrado = numeros.find(elemento => elemento == elemento)

console.log(encontrado)

encontrado = numeros.find(elemento => elemento == 5)

console.log(encontrado)

encontrado = numeros.find(elemento => elemento > 20)

console.log(encontrado)

console.log(numeros)

console.log("----------")

// map -> NO modifica el arreglo

const numeros_map = [1, 2, 3, 4]

let dobles = numeros_map.map(elemento => elemento * 2)

console.log(dobles)
console.log(numeros_map)

dobles = numeros_map.map(elemento => elemento == elemento)
console.log(dobles)

dobles = numeros_map.map(() => "Hola")
console.log(dobles)

const funcion_que_regresa_hola = function () {
    return "Hola"
}

dobles = numeros_map.map(funcion_que_regresa_hola)
console.log(dobles)

console.log("----------")

// Filter -> No modifica el arreglo original

let numeros_filter = [1, 2, 3, 4, 5]

let pares = numeros_filter.filter(elemento => elemento % 2 === 0)
console.log(pares)

pares = numeros_filter.filter(elemento => elemento > 3) // numeros mayores a 3
console.log(pares)

pares = numeros_filter.filter(el => el > 3) // numeros mayores a 3
console.log(pares)

pares = numeros_filter.filter(() => true)
console.log(pares)

console.log("----------")

// forEach -> No modifica el arreglo

let nombres = ["Ana", "Juan", "Pedro"]
nombres.forEach(nombre => console.log(`Hola ${nombre}`))

// Equivalente a:
for(let i = 0; i<nombres.length;i++) {
    console.log(`Hola ${nombres[i]}`)
}

console.log("----------")

// Sort -> SI modifica el arreglo
let numeros_sort = [3, 1, 4, 2, 11, 21]
numeros_sort.sort() // Sin parametros ordena de forma alfabetica

console.log(numeros_sort)

numeros_sort.sort((a,b) => a - b) // 1 - 4 = -3 
console.log(numeros_sort)

console.log("--------")

// Avanzado...

let personas = ["Juan", "Manuel", "Luis", "Ana", "Maria"]

console.log(personas.find(() => Math.random() > 0.5))

personas.sort(() => Math.random() - 0.5)
console.log(personas)