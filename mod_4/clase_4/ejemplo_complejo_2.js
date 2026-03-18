// En este ejercicio, la Sra. Bennet ha decidido que la pareja perfecta debe sumar exactamente 100 puntos de Influencia Social, pero para que el matrimonio no sea aburrido, la diferencia entre sus niveles de Prejuicio debe ser máxima.
const personajes = [
  { nombre: "Elizabeth Bennet", influencia: 20, prejuicio: 95 },
  { nombre: "Sr. Collins", influencia: 20, prejuicio: 10 },
  { nombre: "Sr. Wickham", influencia: 30, prejuicio: 80 },
  { nombre: "Sr. Bingley", influencia: 70, prejuicio: 5 },
  { nombre: "Sr. Darcy", influencia: 80, prejuicio: 110 },
  { nombre: "Lady Catherine", influencia: 90, prejuicio: 100 }
];

const objetivo = 100; // Objetivo de Influecia

// 1. Inicializar los dos punteros
let izquierda = 0
let derecha = personajes.length - 1
let sumaInf = 0 // Suma de Influencia
let sumaPreAntes = 0
let pareja = []

// 2. Mientras izquierda sea menor que derecha:
while(izquierda < derecha) {

    // 2.1 Calcula la suma de los elementos en las posiciones izquierda y derecha
    // suma = arr[izquierda] + arr[derecha]
    sumaInf = personajes[izquierda].influencia + personajes[derecha].influencia
    // 2.2 Si la suma es igual al valor objetivo, Encontramos el par y nos detenemos
    if(sumaInf === objetivo) {
        //console.log(`Par encontrado! ${obj_invitado.nombre} y ${invitados[derecha].nombre}`)
        // break

        sumaPre = personajes[izquierda].prejuicio + personajes[derecha].prejuicio

        if(sumaPreAntes < sumaPre) {
            sumaPreAntes = sumaPre
            pareja = [personajes[izquierda].nombre, personajes[derecha].nombre]
        }
        izquierda++
        derecha--
    }
    // 2.3 Si la suma es menor que el valor objetivo, movemos el puntero izquierda una posición a la derecha.
    else if(sumaInf < objetivo) {
        izquierda++
        //izquierda = izquierda + 1
    }
    // 2.4 Si la suma es mayor que el valor objetivo, movemos el puntero derecha una posición a la izquierda.
    else {
        derecha--
        //derecha = derecha - 1 
    }
    console.log(`Izquierda: ${izquierda} | Derecha ${derecha}`)
}

console.log(`La mejor pareja son ${pareja[0]} y ${pareja[1]}`)
console.log(`Valor de prejuicio: ${sumaPreAntes}`)
console.log(`Valor de prejuicio: ${sumaPreAntes}`)