let persona = "Juan";

function escuela() {
    let estudiante = "Carlos";

    console.log(persona);
    console.log(estudiante);
}

escuela();
//console.log(estudiante)


let x = 1;
function myFunc() {
    let x = 2;
    console.log(x); // 2

    return x;
}
let myvar = myFunc() + myFunc();
console.log(myvar); // 1
