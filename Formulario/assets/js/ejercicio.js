
const myForm = document.getElementById("my-form");          // Guardo mi formulario en la constante myForm mediante el id.

myForm.addEventListener("submit", (e) => {                  // agrego el evento submit y declaro el evento (e).
    e.preventDefault();                                     // Quito el comportamiento por defecto del evento submit.

    //alert(e.target);                                        //Con esto comprendi que la funcion del target.elementes es guardar los elementos del formulario.

    const inputs = e.target.elements;                       //Guardo los elementos que se encuentran en el formulario.

    const contenido = inputs["contenido"].value;
    const altura = inputs["altura"].value;                  //Guardo los inputs del formulario en constantes.
    const ancho = inputs["ancho"].value;

    const elementoCaja = document.getElementById("caja")    //Guargo la cja en la constante elementoCaja
    
    elementoCaja.textContent = contenido;
    elementoCaja.style.width = ancho + 'px';                //Modifico el ancho, la altura de la caja y el contenido de la caja 
    elementoCaja.style.height = altura + 'px';

});

