const nombre = document.querySelector("#nombre");
const enviar_btn = document.querySelector("#enviar_btn");
const saludo_p = document.querySelector("#saludo_p");

enviar_btn.addEventListener("click", () => {
    // Imprimir en la consola
    console.log(nombre.value)
    // saludo_p.textContent 
    saludo_p.innerHTML = `Hola ${nombre.value}!`
})