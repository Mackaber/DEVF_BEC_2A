// Quiero encontrar 2 numeros en el arreglo arr que al sumarlos de 35
let arr = [33, 1, 5, 7, 35 ,33, 2, 86, 10, 9, 14, 0, 2]
let objetivo = 35 

// 1. Inicializar los dos punteros
let izquierda = 0
let derecha = arr.length - 1
let suma = 0

// 2. Mientras izquierda sea menor que derecha:
while(izquierda < derecha) {

    // 2.1 Calcula la suma de los elementos en las posiciones izquierda y derecha
    suma = arr[izquierda] + arr[derecha]
    // 2.2 Si la suma es igual al valor objetivo, Encontramos el par y nos detenemos
    if(suma === objetivo) {
        console.log(`Par encontrado! ${arr[izquierda]} y ${arr[derecha]}`)
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