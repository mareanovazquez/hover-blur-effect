const contenidoUno = document.getElementById('contenido-uno');
const contenidoDos = document.getElementById('contenido-dos');
const contenidoTres = document.getElementById('contenido-tres');

function agregarBlur(elemento1, elemento2) {
    elemento1.classList.add('blur');
    elemento2.classList.add('blur');
}

function quitarBlur(elemento1, elemento2) {
    elemento1.classList.remove('blur');
    elemento2.classList.remove('blur');
}

contenidoUno.addEventListener('mouseover', () => {
    agregarBlur(contenidoDos, contenidoTres);
});

contenidoUno.addEventListener('mouseout', () => {
    quitarBlur(contenidoDos, contenidoTres);
});

contenidoDos.addEventListener('mouseover', () => {
    agregarBlur(contenidoUno, contenidoTres);
});

contenidoDos.addEventListener('mouseout', () => {
    quitarBlur(contenidoUno, contenidoTres);
});

contenidoTres.addEventListener('mouseover', () => {
    agregarBlur(contenidoDos, contenidoUno);
});

contenidoTres.addEventListener('mouseout', () => {
    quitarBlur(contenidoDos, contenidoUno);
});
