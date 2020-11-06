
pagina_secundaria = window.open(
    "pagina_secundaria.html",
    "dibuix",
    "left=100px, height=50px, resizable=false"
);
pagina_terciaria = window.open(
    "pagina_terciaria.html",
    "palabra",
    "left=100px, height=50px, resizable=false"
);
pagina_cuaternaria = window.open(
    "pagina_cuaternaria.html",
    "estadisticas",
    "left=100px, height=50px, resizable=false"
);

var palabras = prompt("Indica les paraules separades per comes (',')");
console.log(palabras);

if (palabras === "") { //compara el valor y el tipo
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

//serveix per introduir lletres a la paraula que s'ha d'esbrinar
document.getElementById("començar").addEventListener("click", introduirLletra);
//escribim una lletra al quadre de text, fem click al botó introduir lletra i cirdem a la funció introduirLletra
var lletra = "";
function introduirLletra(){ //amb aquesta funció guardem el valor del quadre de text en una variable.
  lletra = document.getElementById("lletra").value;
  console.log(lletra)
}







var lletresPerDescobrir =[]; //array amb totes les lletres que pot descobrir l'usuari
var cadena = "";

for(i = 0; i<10; i++){ //omplim l'array inicialment amb guions baixos (_)
    lletresPerDescobrir[i] = "_"
    cadena =  cadena + " " + lletresPerDescobrir[i] //formem una cadena amb els _ i espais per
                                                    //diferenciar bé les lletres
}
document.getElementById("lletres").innerText = cadena; //mostrem la cadena en l'element p amb id lletres


var EsCorrecte;
if(lletra.indexOf() == introduirLletra()){
     cadena = EsCorrecte.replace('_',lletra);
}; //Aquí lo que estoy intentando es reemplazar los guiones por la letra correcta 