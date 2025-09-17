let key =`u0OWh6nFHgnEdx3IDUARpNkIKdCixDvHSoLIXYhV`

let botonFecha = document.querySelector("#botonFecha")
let imagenFecha = document.querySelector("#imagenFecha")
let fecha = document.querySelector("#fecha")

botonFecha.onclick = function() {
    console.log(fecha)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fecha.value}`)
    .then(res => res.json())
    .then(fotoFecha => {
        imagenFecha.src = fotoFecha.hdurl
        titulo.textContent = fotoFecha.title
    })
}