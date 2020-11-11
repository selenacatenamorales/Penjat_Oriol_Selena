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

pagina_cuaternaria.document.getElementById("partidesG").innerText = "Partides guanyades: 1232323";
pagina_cuaternaria.document.getElementById("partidesP").innerText = "Partides guanyades: 1232323";
pagina_cuaternaria.document.getElementById("partidesA").innerText = "Partides guanyades: 1232323";


//var partidasG = document.cookie = "PartidasG = 0; expires=Thu, 3 Dec 2020 12:00:00 UTC,"; //creació cookie partides guanyades
document.cookie = "PartidasP = 0; expires=Thu, 3 Dec 2020 12:00:00 UTC"; //creació cookie partides perdudes
//var partidasA = document.cookie = "PartidasA = 0; expires=Thu, 3 Dec 2020 12:00:00 UTC"; ////creació cookie partides abandonades
console.log(getCookie("PartidasP"));
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
console.log(document.cookie);

var contador = 0;
var cadena = "";
var palabraD = [];
var palabras = prompt("Indica les paraules separades per comes (',')");
console.log(palabras);

if (palabras === "" | palabras == null) { //compara el valor y el tipo
  //si el usuario no idncia palabras escogeremos una de un Array Predefinido
  var ListadoPreDefinido = ["CASA", "MANZANA", "COCHE"];
  palabraelegida =
    ListadoPreDefinido[Math.floor(Math.random() * ListadoPreDefinido.length)];
  //cogemos un valor aleatorio de el array predefinido
  console.log(palabraelegida);
  mostrarcadenavacia(palabraelegida.length);
} else {
    listadoPalabras = palabras.trim().toUpperCase().split([","]); //trim quitar espacios delante y detras del prompt,
    //split separa el String en un array a partir del simbolo que le pasamos
    //toUpperCase funciona para pasar el listado de palabras a mayusculas para evitar errores.
    console.log(listadoPalabras);

    palabraelegida =
        listadoPalabras[Math.floor(Math.random() * listadoPalabras.length)]; //cogemos un valor aleatorio de el array
    //formado por el usuario
    console.log(palabraelegida);
    mostrarcadenavacia(palabraelegida.length);
}

//serveix per introduir lletres a la paraula que s'ha d'esbrinar
document.getElementById("introduir_lletra").addEventListener("click", introduirLletra);
//escribim una lletra al quadre de text, fem click al botó introduir lletra i cirdem a la funció introduirLletra

//serveix per introduir lletres a la paraula que s'ha d'esbrinar
document.getElementById("tornar").addEventListener("click", novaparaula_temps);
//escribim una lletra al quadre de text, fem click al botó introduir lletra i cirdem a la funció introduirLletra

function novaparaula_temps(){
  alert("Espera mentres preparem la nova paraula");
  setTimeout(function(){ alert("Gràcies per esperar-te 5 segons"); }, 5000); //setTimeout executa l’expressió passats msec mil·lisegons.
  novaparaula();                                                                          //L'usuari ha d'esperar-se al passar 5 segons si vol tornar a començar el joc
}

function novaparaula(){
  palabraD = []; //buidem l'array de la paraula per descobrir
  if (palabras === "" | palabras == null){
  palabraelegida =
    ListadoPreDefinido[Math.floor(Math.random() * ListadoPreDefinido.length)];
    console.log(palabraelegida);
  }
  else{
  palabraelegida =
  listadoPalabras[Math.floor(Math.random() * listadoPalabras.length)];
  console.log(palabraelegida);
  }
  pagina_secundaria.document.getElementById("imagen").src = "img1.jpg";
  contador = 0;
   mostrarcadenavacia(palabraelegida.length);
}

function mostrarcadenavacia(TamañoPalabra){
  cadena = "";
  palabraD = [];
  for(i=0; i<TamañoPalabra; i++){  //omplim l'array inicialment amb guions baixos (_)
  palabraD[i] = "_"
  cadena =  cadena + " " + palabraD[i]; //formem una cadena amb els _ i espais per
                                         //diferenciar bé les lletres
}
console.log(TamañoPalabra);
pagina_terciaria.document.getElementById("lletres").innerText = cadena; //mostrem la cadena en l'element p amb id lletres
console.log(palabraD);

}

function introduirLletra(){ 
  lletra = document.getElementById("lletra").value; //guardem el valor del quadre de text en una variable i la pasem a 
  if (lletra !== "" ){   //valida si el textbox conté una lletra
  lletra = lletra.toUpperCase().trim();     //majuscules per evitar errors
  console.log(lletra);
  var pos = palabraelegida.indexOf(lletra); //busquem la posició on esta situada la lletra que 
                                             //ha introduit l'usuari en la paraula per endivinar.
  if (pos ==-1){
    contador ++;
    switch (contador) { //sirve para cambiar el src de la imagen al fallar, se controla gracias al contador
      case 1:
        pagina_secundaria.document.getElementById("imagen").src = "img2.jpg"
        break;
        case 2:
          pagina_secundaria.document.getElementById("imagen").src = "img3.jpg"
          break;
          case 3:
            pagina_secundaria.document.getElementById("imagen").src = "img4.jpg"
            break;
            case 4:
              pagina_secundaria.document.getElementById("imagen").src = "img5.jpg"
              break;
              case 5:
                pagina_secundaria.document.getElementById("imagen").src = "img6.jpg"
                //var x = parseInt(document.cookie[1]); 
                //document.cookie[1] = x ++;
                //console.log(document.cookie);
                pagina_terciaria.document.getElementById("lletres").innerText = "HAS PERDUT";
                alert("Espera mentres preparem la nova paraula, més sort la proxima vegada");
                setTimeout(function(){alert("Gràcies per esperar-te 10 segons")}, 10000);
                novaparaula()
                break;
    }
    
  }
  else{                                       
  while (pos !== -1) {  //mentres la posició de la lletra sigui -1, és a dir, que esta en la paraula per endevinar.
    palabraD[pos] = lletra; //subsituirem en l'array el guio per la lletra corresponent
    pos = palabraelegida.indexOf(lletra, pos + 1); //indiquem que busqui la nova posició de la lletra a partir de la anterior + 
                                                      // és a dir si la lletra estaba en la pos 2, seguirem buscant a partir de la pos 3
  }
}
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

//var guanyades = document.getElementById("partidesG");
//function partidas_ganadas(){
 // if(cadena == palabraD.length){
  //  guanyades = "Partides Guanyades: "+ contadorPartidas++;
 // }

//}

//function partidas_perdidas(){
 // if(a == b);
//}

//pagina_cuaternaria.document.getElementById("partidesG").innerText = "Partides guanyades: 1232323";
//pagina_cuaternaria.document.getElementById("partidesP").innerText = "Partides guanyades: 1232323";
//pagina_cuaternaria.document.getElementById("partidesA").innerText = "Partides guanyades: 1232323";