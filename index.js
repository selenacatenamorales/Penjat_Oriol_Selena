window.open(
    "pagina_secundaria.html",
    "dibuix",
    "left=100px, height=50px, resizable=false"
);
window.open(
    "pagina_terciaria.html",
    "palabra",
    "left=100px, height=50px, resizable=false"
);
window.open(
    "pagina_cuaternaria.html",
    "estadisticas",
    "left=100px, height=50px, resizable=false"
);

var palabras = prompt("Indica las palabras separadas por coma (',')");
console.log(palabras);

if (palabras === "") {
    //si el usuario no idncia palabras escogeremos una de un Array Predefinido
    var ListadoPreDefinido = ["CASA", "MANZANA", "COCHE"];
    palabraelegida =
        ListadoPreDefinido[Math.floor(Math.random() * ListadoPreDefinido.length)];
    //cogemos un valor aleatorio de el array predefinido
    console.log(palabraelegida);
} else {
    listadoPalabras = palabras.trim().toUpperCase().split([","]); //trim quitar espacios delante y detras del prompt,
    //split separa el String en un array a partir del simbolo que le pasamos
    //toUpperCase funciona para pasar el listado de palabras a mayusculas para evitar errores.
    console.log(listadoPalabras);

    var palabraelegida =
        listadoPalabras[Math.floor(Math.random() * listadoPalabras.length)]; //cogemos un valor aleatorio de el array
    //formado por el usuario
    console.log(palabraelegida);
}

Document.getElementbyID("start").addEventListener("click", introducirLetra());
function introducirLetra() {
    introducirletra = prompt("Introduce una letra");//
}