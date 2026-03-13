// Primera parte
let mountains = ['Everest', 'Fuji', 'Nanga Parbar']

console.log(mountains[0])
console.log(mountains[1])
console.log(mountains[2])

mountains.push('Popocatepetl')
console.log(mountains)
console.log(mountains.indexOf('Fuji'))
console.log(mountains.indexOf('Iztazihutl')) // -1 Si es algo que NO está en la lista

console.log("-----------------------")

// Ciclo for para recorrer un arreglo
const numeros = [10, 20, 30, 40]
// for (inicializacion de la variable para contar; condicion a cumplir -hast donde-; operación del contador i = i + 1)
for(let i = 0;i<numeros.length; i++) {
    console.log(numeros[i])
}