// Funcion normal

function funcion_normal(a, b) {
    return a + b;
}

// Funcion como variable

const funcion_como_variable = function(a, b) {
    return a + b
}

// Funciones flecha

const funcion_flecha = (a,b) => {
    //console.log(a)
    //console.log(b)
    //....
    return a + b
}

// Funciones con una sóla línea se simplifican

const funcion_simplificada = (a,b) => a + b

// Funciones con un sólo parámetro no necesitan paréntesis

const funcion_con_un_parametro = a => a*a

console.log(funcion_normal(2,3))
console.log(funcion_como_variable(2,3))
console.log(funcion_flecha(2,3))
console.log(funcion_simplificada(2,3))
console.log(funcion_con_un_parametro(2))