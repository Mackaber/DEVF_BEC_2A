// En el mundo de Orgullo y Prejuicio, el estatus social y la renta anual lo son todo. La Sra. Bennet quiere organizar parejas de baile, pero tiene una regla muy específica: la suma de la renta anual de los dos miembros de la pareja debe ser exactamente igual a un valor objetivo para asegurar la "estabilidad" del matrimonio.
const invitados = [
  { nombre: "Lydia Bennet", renta: 100 },
  { nombre: "Jane Bennet", renta: 500 },
  { nombre: "Sr. Bingley", renta: 4000 },
  { nombre: "Sr. Darcy", renta: 10000 },
  { nombre: "Lady Catherine de Bourgh", renta: 25000 }
];

const objetivo = 14000

// 1. Inicializar los dos punteros
let izquierda = 0
let derecha = invitados.length - 1
let suma = 0

// 2. Mientras izquierda sea menor que derecha:
while(izquierda < derecha) {

    // 2.1 Calcula la suma de los elementos en las posiciones izquierda y derecha
    // suma = arr[izquierda] + arr[derecha]
    obj_invitado = invitados[izquierda]
    suma = obj_invitado.renta + invitados[derecha].renta
    // 2.2 Si la suma es igual al valor objetivo, Encontramos el par y nos detenemos
    if(suma === objetivo) {
        console.log(`Par encontrado! ${obj_invitado.nombre} y ${invitados[derecha].nombre}`)
        break
    }
    // 2.3 Si la suma es menor que el valor objetivo, movemos el puntero izquierda una posición a la derecha.
    if(suma < objetivo) {
        izquierda++
        //izquierda = izquierda + 1
    }
    // 2.4 Si la suma es mayor que el valor objetivo, movemos el puntero derecha una posición a la izquierda.
    if(suma > objetivo) {
        derecha--
        //derecha = derecha - 1 
    }
}