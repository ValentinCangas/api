let key = "emAX7kURdpbL53UttDOLM2dhthdEzYY3BtUbdhG"

let imagenDelDia = document.querySelector("#imagen")
let boto = document.querySelector("#boton")
let titulo = document.querySelector("h1")

boton.onclick = function () {
    fetch("https://api.nasa.gov/planetary/apod?api_key=${key}")
     .then(res => res.json())
     .then(fotoDelDia => {
        imagenDelDia.src = fotoDelDia.hdurl
        titulo.textContent = fotoDelDia.title
     })
}