const paginas = {
  inicio: {
    titulo: "Bienvenido a tu Blog de Videojuegos",
    texto: "Esta es la página de inicio. ¡Pronto más contenido!"
  },
  quienes: {
    titulo: "Quiénes Somos",
    texto: "Somos apasionados por los videojuegos, la tecnología y el desarrollo web. Este blog nace para compartir noticias, guías y reseñas del mundo gamer."
  },
  contacto: {
    titulo: "Contacto",
    texto: "Para consultas, colaboraciones o sugerencias escríbenos a contacto@blogvideojuegos.com"
  }
};


function navegar (paginas) {
    // Cambia contenido principal
    document.getElementById("contenido").innerHTML = `
    <h1>${paginas[pagina].titulo}</h1>
    <p>${paginas[pagina].texto}</p>
    `;
    // Resalta el enlace 
    document.querySelectorAll(".navbar a").forEach(enlace => {
        enlace.classList.remove("active");
    });
    document.getElementById("link-" + pagina).classList.add("active");
};

//Marca inicio como activo por defecto
window.onload = function() {
    document.getElementById("link-Inicio").classList.add("active");
};
