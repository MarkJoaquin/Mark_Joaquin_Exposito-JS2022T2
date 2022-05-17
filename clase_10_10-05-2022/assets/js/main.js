const caja = document.querySelector("#caja"); //Obtenfo el elemento mediante el ID
//console.log(caja);

const listado = document.querySelector("ul"); //Obtendo el elemento mediante el tag HTML
console.log(listado);

const listadoli = document.querySelectorAll("li"); //Obtengo todos los elementos con el tag HTML "li"
console.log(listadoli);

// Agrego codigo HTML al elemento seleccionado
caja.innerHTML= `
<h3> HTML incrustado </h3>                          
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora suscipit distinctio dolorem, consequatur totam reprehenderit vero mollitia, veniam explicabo incidunt eveniet eius magnam ipsam quo dignissimos dolore qui odit. </p>
`;


for(let i=0; i<listadoli.length; i++){             //Modificar el contenido de un elemneto mediante un bucle

listadoli[i].textContent = `🎁 ${listadoli[i].textContent} regalo incluido.`

}    


const listadoInput = document.querySelectorAll("input[type=text]");
console.log(listadoInput);


const padreLista = document.querySelector("ul");

for(let i=0; i<5; i++){

    //Crear elemnetos en el DOM 
    const li = document.createElement('li');
    const link = document.createElement('a');

    //Asigno valores a las propiedades
    link.href = 'https://www.google.com';
    link.textContent = 'www.google.com';
    link.target = '_blank'
    li.textContent = ` Ver TV ${i+1} `;
    li.style.cursor = 'pointer';

    /* li.addEventListener('click', (e)=>{
        alert(li.textContent)
    });
 */

    //Agregar elementos creados a otros elementos que ya existen.
    li.appendChild(link);
    padreLista.appendChild(li);

}
