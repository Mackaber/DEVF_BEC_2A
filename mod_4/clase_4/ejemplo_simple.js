// Tu objetivo es encontrar el primer par de invitados consecutivos que puedan 
// sentarse juntos según este criterio.

// Criterio: los invitados prefieren 
// sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. 

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo", "Miguel"];

function encontrarPareja(arr) {

    // 1. Inicializar los dos punteros
    let izquierda = 0
    let derecha = arr.length - 1
    let nombre1 = ""
    let nombre2 = ""

    // 2. Mientras izquierda sea menor que derecha:
    while(izquierda < derecha) {

        // nombre1 = "Miguel"
        // nombre2 = "Montse"
        // 
        // if(nombre1[0] === nombre2[0])
        anterior1 = nombre1
        anterior2 = nombre2

        nombre1 = invitados[izquierda]
        nombre2 = invitados[derecha]

        if(nombre1[0] === nombre2[0]) {
            return [nombre1, nombre2]
        } else if(nombre1[0] <= nombre2[0]) {
            //console.log(`Anterior derecha: ${anterior2} Derecha: ${nombre}`)
            if(anterior2 === nombre2) {
                derecha--
            } else {
                izquierda++
            }
            //derecha = derecha - 1 
        } else {
            if(anterior1 === nombre1) {
                izquierda++
            } else {
                derecha--
            }
            izquierda++
            //izquierda = izquierda + 1
        }


        //console.log(`Izquierda: ${izquierda} | Derecha ${derecha}`)
        console.log(`Izquierda: ${nombre1} | Derecha ${nombre2}`)
    }
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]
