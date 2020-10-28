window.open("pagina_secundaria.html", "dibuix", "left=100px, height=50px, resizable=false");
window.open("pagina_terciaria.html", "palabra", "left=100px, height=50px, resizable=false");
window.open("pagina_cuaternaria.html", "estadisticas", "left=100px, height=50px, resizable=false");

var palabras = prompt("Indica las palabras separadas por coma (',')");
console.log(palabras);

listadoPalabras = palabras.trim().split([","]);
console.log(listadoPalabras);

var palabraelegida = listadoPalabras[Math.floor(Math.random() * listadoPalabras.length)];
console.log(palabraelegida);