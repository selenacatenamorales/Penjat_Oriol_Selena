pagina_secundaria = window.open(
    "pagina_secundaria.html",
    "dibuix",
    "left=1250px, width=300px, height=300px, resizable=false"
);
pagina_terciaria = window.open(
    "pagina_terciaria.html",
    "palabra",
    "left=1250px, top=500px, width=300px, height=300px, resizable=false"
);
pagina_cuaternaria = window.open(
    "pagina_cuaternaria.html",
    "estadisticas",
    "left=850px, top=300px, width=300px, height=300px, resizable=false"
);

var palabras = prompt("Indica les paraules separades per comes (',')");
console.log(palabras);

if (palabras === "" | palabras == null) { //compara el valor y el tipo
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

var TamañoPalabra = palabraelegida.length; //cogemos el tamaño de la palabra por descubrir;
console.log(TamañoPalabra);

 //crea el array inicial de la palabra sin descubrir
 var cadena = "";
 var palabraD = [];
 for(i=0; i<TamañoPalabra; i++){  //omplim l'array inicialment amb guions baixos (_)
   palabraD[i] = "_"
   cadena =  cadena + " " + palabraD[i]; //formem una cadena amb els _ i espais per
                                          //diferenciar bé les lletres
 }
 pagina_terciaria.document.getElementById("lletres").innerText = cadena; //mostrem la cadena en l'element p amb id lletres
 console.log(palabraD);


//serveix per introduir lletres a la paraula que s'ha d'esbrinar
document.getElementById("introduir_lletra").addEventListener("click", introduirLletra);
//escribim una lletra al quadre de text, fem click al botó introduir lletra i cirdem a la funció introduirLletra

function introduirLletra(){ 
  lletra = document.getElementById("lletra").value; //guardem el valor del quadre de text en una variable.
  console.log(lletra);
  var pos = palabraelegida.indexOf(lletra); //busquem la posició on esta situada la lletra que 
                                             //ha introduit l'usuari en la paraula per endivinar.
  while (pos !== -1) {  //mentres la posició de la lletra sigui -1, és a dir, que esta en la paraula per endevinar.
    palabraD[pos] = lletra; //subsituirem en l'array el guio per la lletra corresponent
    pos = palabraelegida.indexOf(lletra, pos + 1); //indiquem que busqui la nova posició de la lletra a partir de la anterior + 
                                                      // és a dir si la lletra estaba en la pos 2, seguirem buscant a partir de la pos 3
  }
  console.log(palabraD);
  mostrarcadena();
}

function mostrarcadena(){
  console.log
  cadena = ""; //buidem la cadena per a sobrescriure-la
for(i=0; i<palabraD.length; i++){   //funcio per mostrar l'array de la paraula que estem descobrint.
   cadena =  cadena + " " + palabraD[i];                                         
 }
 console.log(cadena);
 pagina_terciaria.window.document.getElementById("lletres").innerText = cadena;
}
  
  







/*
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
*/