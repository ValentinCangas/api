fetch("https://api.nasa.gov/planetary/apod?api_key=f5KYE3JIAP1PA5YMc3gFvp0gHU2V6efU00psWP0K")
  .then(res => res.json())
  .then(datos => {
    console.log(datos.title); // Muestra el título en consola
    console.log(datos.url);   // Muestra la URL de la imagen/video
  });