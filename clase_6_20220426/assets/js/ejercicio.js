/* 
// function simple
function saludo() {
    console.log("Hola, desde una funcion")
}

 //invocar funcion
//saludo()

// function con parametros
function saludos(evento) {
    // evitar que se refresque la pagina
    evento.preventDefault()

    console.log("Hola, desde una funcion")
}

const miFormulario = document.querySelector("#my-form")
console.log(miFormulario)


miFormulario.addEventListener('submit', saludos) */


// accion para obtener el formulario
const miFormulario = document.querySelector("#my-form")

function eventoSubmit(evento) {
    // Quitar comportamiento por defecto del evento
    evento.preventDefault()

    // Desde aqui va mi logica para el evento...
    
    // Obtener los inputs del formulario
    const inputs = evento.target.elements;

    // Obtener los valos de los inputs
    const contenido = inputs["contenido"].value;
    const altura =  inputs["altura"].value;
    const ancho = inputs["ancho"].value;

    // Cambiar texto de la caja
    const elementoCaja = document.querySelector("#caja")
    elementoCaja.textContent = contenido;

    // Cambiar ancho de la caja
    elementoCaja.style.width = ancho + 'px'

    // Cambiar altura de la caja
    elementoCaja.style.height = altura + 'px'
}


miFormulario.addEventListener("submit", eventoSubmit)
// eventoSubmit(evento)