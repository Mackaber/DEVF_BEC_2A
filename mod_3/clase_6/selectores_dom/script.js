// Modificar un elemento existente
const parrafo = document.querySelector('p');

parrafo.textContent = 'nuevo texto'
parrafo.innerHTML = '<b>nuevo</b>'
parrafo.style.color = 'red'

// Agregar un nuevo elemento
const nuevoComentario = document.createElement('p');
nuevoComentario.textContent = 'Este es un comentario';
document.body.appendChild(nuevoComentario);


// Agregando un EventListener

const boton = document.querySelector('button');

boton.addEventListener('click', () => {
  alert('Hiciste clic en el botón');
});


let html = `
<div>
    <h1>Titulo</h1>
    <img src="">
</div>
`
tabla.innerHTML = html