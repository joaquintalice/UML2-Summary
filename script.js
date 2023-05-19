function abrirImagen(elemento) {
    // Obtener la ruta de la imagen
    var rutaImagen = elemento.getAttribute("src");

    // Abrir la imagen en una ventana emergente o realizar alguna otra acción
    // Ejemplo: abrir la imagen en una ventana emergente con un tamaño específico
    window.open(rutaImagen, "_blank", "width=1200, height=800");
}
