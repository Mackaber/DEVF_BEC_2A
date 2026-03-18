// Tu objetivo es encontrar el primer par de invitados consecutivos que puedan 
// sentarse juntos según este criterio.

// Criterio: los invitados prefieren 
// sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. 

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {

    // 1. Inicializar los dos punteros
    let izquierda = 0
    let derecha = arr.length - 1

    // 2. Mientras izquierda sea menor que derecha:
    while(izquierda < derecha) {

        // nombre1 = "Miguel"
        // nombre2 = "Montse"
        // 
        // if(nombre1[0] === nombre2[0])

        let nombre1 = invitados[derecha]
        let nombre2 = invitados[izquierda]

        if(nombre1[0] === nombre2[0]) {
            return [nombre1, nombre2]
        } else if(nombre1[0] <= nombre2[0]) {
            derecha--
            //derecha = derecha - 1 
        } else {
            izquierda++
            //izquierda = izquierda + 1
        }


        console.log(`Izquierda: ${izquierda} | Derecha ${derecha}`)
    }
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]
