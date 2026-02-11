// Objetos anidados
const empresa = {
    nombre: "TechCorp",
    empleados: { jefe: "Ana" }
}

console.log(empresa.empleados)
console.log(`La empresa se llama ${empresa.nombre} y jefe es: ${empresa.empleados.jefe}`)

// Destructuración

const persona = {
    nombre: "Mackaber",
    edad: 34
}

let { nombre } = persona;
console.log(nombre)

// Es equivalente a...

//const nombre = persona.nombre
//console.log(nombre)

// Destructuración con múltiples propiedades

let { edad, profesion } = persona
console.log(nombre, edad, profesion)

// Mucho más sencillo que...

//const nombre = persona.nombre
//const edad = persona.edad
//const profesion = persona.profesion
//console.log(nombre, edad, profesion)