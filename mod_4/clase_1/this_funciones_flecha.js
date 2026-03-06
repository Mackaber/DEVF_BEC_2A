function funcion_tradicional() {
    return this // Esto se refiere a la funcion como tal
}

funcion_flecha = () =>  {
    return this // Se refiere al objeto (en caso de que exista)
}

console.log(funcion_tradicional())
console.log(funcion_flecha())

obj =  {
    name: "Objeto",
    fn_tradicional: function() {
        return this.name
    },
    fn_flecha: () => {
        return this.name
    }
}

console.log(obj.fn_tradicional())
console.log(obj.fn_flecha())