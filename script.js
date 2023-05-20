function abrirImagen(elemento) {
    // Obtener la ruta de la imagen
    var rutaImagen = elemento.getAttribute("src");

    // Abrir la imagen en una ventana emergente o realizar alguna otra acción
    // Ejemplo: abrir la imagen en una ventana emergente con un tamaño específico
    window.open(rutaImagen, "_blank", "width=1200, height=800");
}


window.addEventListener("scroll", function () {



    let scrollPosition = window.scrollY;
    console.log(scrollPosition);

    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    if (scrollPosition >= 400) {
        sidebar.style.display = "none";
        content.style.width = "100%"
    } else {
        sidebar.style.display = "flex";
    }
})