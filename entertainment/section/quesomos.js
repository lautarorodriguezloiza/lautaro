/* Informacion del Usuario*/

let informacionUsuario = document.getElementById("informacion");
informacionUsuario.addEventListener("submit",agregarInformacion)

function agregarInformacion(e){
        e.preventDefault()
    let nombreUsuario = e.target[0].value
    let edad = e.target[1].value
    let nombreEdad = document.createElement ("div")
    nombreEdad.innerHTML= `Su nombre de usuario es:  ${nombreUsuario}su edad es: ${edad}` 
    document.body.appendChild(nombreEdad)
localStorage.setItem('nombreEdad',JSON.stringify(nombreEdad))
}
