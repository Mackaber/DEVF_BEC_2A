// Un callback es una funcion que es llamada como parametro de otra

const myfunc = (param, callback) => {
    console.log(`El texto original era ${param} y su transformación es ${callback(param)}`) 
}

const todoAMayusculas = (texto) => {
    return texto.toUpperCase()
}

const todoAMinusculas = (texto) => {
    return texto.toLowerCase()
}

myfunc("Hola Mundo!", todoAMinusculas)

myfunc("Hola Mundo!", (texto) => texto.substring(1,5))

