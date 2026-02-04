// Arreglos

let nombres = ["Mackaber", "Andrea", "Alejandra", "Adrian"];

// Nombre en la posición 0
console.log(nombres[0]);

// Nombre en la posición 3
console.log(nombres[3]);

// Arreglo completo
console.log(nombres);


// Métodos de arreglos

// push() Agrega al final

nombres.push("Diego");
console.log(nombres);

// pop() Quita el último elemento

nombres.pop();
console.log(nombres);

// unshift() Agrega al inicio
nombres.unshift("Diego");
console.log(nombres);

// shift() Quita el primer elemento
nombres.shift();
console.log(nombres);

// sort()

let numeros = [1,6,4,7,8,3,2,11,33];

// Por defecto lo hace por orden alfábetico
numeros.sort();
console.log(numeros);

// Ordenar de forma numérica
numeros.sort((a,b) => a - b);
console.log(numeros);

// map() Modifica todos los elementos... NO MODIFICA EL ARREGLO ORIGINAL

let numeros_por_2 = numeros.map(a => a*2);
console.log(numeros_por_2);