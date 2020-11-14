pagina_secundaria = window.open(
  //apaertura página secundaria
  "pagina_secundaria.html",
  "dibuix",
  "left=1250px, width=300px, height=300px, resizable=false"
);
pagina_terciaria = window.open(
  //apertura página terciaria
  "pagina_terciaria.html",
  "palabra",
  "left=1250px, top=500px, width=300px, height=300px, resizable=false"
);
pagina_cuaternaria = window.open(
  //apertura página cuaternária
  "pagina_cuaternaria.html",
  "estadisticas",
  "left=850px, top=300px, width=300px, height=300px, resizable=false"
);

if (document.cookie === "") {
  //if percontrolar si les cookies estan creades
  document.cookie = "PartidasG = 0; expires=Thu, 3 Dec 2020 12:00:00 UTC"; //creació cookie partides guanyades
  document.cookie = "PartidasP = 0; expires=Thu, 3 Dec 2020 12:00:00 UTC"; //creació cookie partides perdudes
  document.cookie = "PartidasA = 0; expires=Thu, 3 Dec 2020 12:00:00 UTC"; ////creació cookie partides abandonades
}

//funció emagatzemada en window.onload que ens mostra les estadistiques gloabals
window.onload = function () {
  pagina_cuaternaria.document.getElementById("partidesP").innerText =
    "Partides perdudes: " + partidasP;
  pagina_cuaternaria.document.getElementById("partidesA").innerText =
    "Partides abandonades: " + partidasA;
  pagina_cuaternaria.document.getElementById("partidesG").innerText =
    "Partides guanyades: " + partidasG;
};

var partidasP = parseInt(getCookie("PartidasP")); //convierte el numero en formato string a entero
var partidasG = parseInt(getCookie("PartidasG")); //convierte el numero en formato string a entero
var partidasA = parseInt(getCookie("PartidasA")); //convierte el numero en formato string a entero

function getCookie(cname) {
  //funció que ens retornar el valor de la cookie en format string, li pasem el nom de la cookie
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  //funció que ens actualitza el valor de la cookie, li pasem el nom de la cookie, el valor i els dies d'expiració
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}
console.log(document.cookie);

//VARIABLES GLOBALS
var letras_aceptadas = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ,"; //string de les lletres per validar en prompt
var letras_introducidas = ""; //string que msotrara les lletres introduides per l'usuari
var contador = 0; //contador de vides
var cadena = ""; //string que ens mostra els guions de la paraula
var palabraD = []; //arrayamb la paraula per descobrir
var letras_validadas = ""; //string amb les lletres valides del prompt
var palabras = prompt("Indica les paraules separades per comes (',')")
  .toUpperCase() //toUpperCase funciona per passar totes les lletre a majuscules
  .trim(); //trim treu els espais davant i darrere del prompt
console.log(palabras);

if (palabras != null) {
  //funció per validar el string que introduiex l'usuari
  for (i = 0; i < palabras.length; i++) {
    if (letras_aceptadas.indexOf(palabras.charAt(i)) != -1) {
      //indexof ens retorna la posició en la que es troba la lletra, si ens retorna -1 vol dir que no apareix
      letras_validadas = letras_validadas + palabras.charAt(i); //charAt ens agafa el char de la psoció i
    }
  }
  palabras = letras_validadas; //acutalitzem el valor amb el string validat
}

if ((palabras === "") | (palabras == null)) {
  //compara el valor i el tipus
  //si l'usuari no indica cap paraula o cancela el prompt escollirem una del array predefint
  var ListadoPreDefinido = [
    "CASA",
    "MANZANA",
    "COCHE",
    "ELECTRICIDAD",
    "PROGRAMADOR",
    "USUARIO",
  ];
  palabraelegida =
    ListadoPreDefinido[Math.floor(Math.random() * ListadoPreDefinido.length)];
  //cogemos un valor aleatorio de el array predefinido
  console.log(palabraelegida);
  mostrarcadenavacia(palabraelegida.length);
} else {
  palabras;
  listadoPalabras = palabras.split([","]); //split separa el String en un array a partir del simbol que li pasem
  console.log(listadoPalabras);

  palabraelegida =
    listadoPalabras[Math.floor(Math.random() * listadoPalabras.length)]; //cogemos un valor aleatorio de el array
  //formado por el usuario
  console.log(palabraelegida);
  mostrarcadenavacia(palabraelegida.length);
}

document
  .getElementById("introduir_lletra") //serveix per introduir lletres a la paraula que s'ha d'esbrinar
  .addEventListener("click", introduirLletra); //escribim una lletra al quadre de text, fem click al botó introduir lletra i cirdem a la funció introduirLletra

document.getElementById("tornar").addEventListener("click", novaparaula_temps);
//al fer click al boto tornar a començar cridem a la funció novaparaula_temps

function novaparaula_temps() {
  //funcio a la que cridem quan fem click al boto
  document.getElementById("introduir_lletra").style.display = "none"; //ocultem el botó introduir lletra per evitar errors
  document.getElementById("tornar").style.display = "none"; //ocultem el botó tornar a començar per evitar errors
  partidasA++; //augmentem el contador de les partides abandonades
  alert("Espera mentres preparem la nova paraula");
  setTimeout(function () {
    alert("Gràcies per esperar-te 5 segons");
  }, 5000); //setTimeout executa l’expressió passats 5000 mil·lisegons.
  setTimeout(function () {
    document.getElementById("introduir_lletra").style.display = "inline"; //tornem a mostrar el botó de introduir_lletra
    document.getElementById("tornar").style.display = "inline"; //torne a mostrar el botó de tornar
  }, 5000);
  setCookie("PartidasA", partidasA, 10); //acutalizem el valor de la cookie PartidasA
  pagina_cuaternaria.document.getElementById("partidesA").innerText =
    "Partides abandonades: " + partidasA; //mostra el valor de les partides abandonades per pantalla
  novaparaula();
}

function novaparaula() {
  //funció per jugar amb una altre paraula
  letras_introducidas = ""; //buidem el string de les lletres introduides per l'usuari
  document.getElementById(
    "letras_introducidas"
  ).innerText = letras_introducidas; //mostra per pantalla les lletres introduides
  palabraD = []; //buidem l'array de la paraula per descobrir
  if ((palabras === "") | (palabras == null)) {
    palabraelegida =
      ListadoPreDefinido[Math.floor(Math.random() * ListadoPreDefinido.length)];
    console.log(palabraelegida);
  } else {
    palabraelegida =
      listadoPalabras[Math.floor(Math.random() * listadoPalabras.length)];
    console.log(palabraelegida);
  }
  pagina_secundaria.document.getElementById("imagen").src = "img1.jpg"; //reiniciem la imatge del penjat a la primera
  contador = 0; //reiniciem el contador de vides
  mostrarcadenavacia(palabraelegida.length);
}

function mostrarcadenavacia(TamañoPalabra) {
  //funció que mostra la longitud de la parula amb guions baixos
  cadena = ""; //buidem la cadena
  palabraD = []; //buidem l'array de la paraula per descobrir
  for (i = 0; i < TamañoPalabra; i++) {
    //omplim l'array inicialment amb guions baixos (_)
    palabraD[i] = "_";
    cadena = cadena + " " + palabraD[i]; //formem una cadena amb els _ i espais per
    //diferenciar bé les lletres
  }
  console.log(TamañoPalabra);
  pagina_terciaria.document.getElementById("lletres").innerText = cadena; //mostrem la cadena en l'element p amb id lletres
  console.log(palabraD);
}

function introduirLletra() {
  //funció per introdui la lletra en la paraula per descobrir
  lletra = document.getElementById("lletra").value; //guardem el valorde la lletra introduida per l'usuari
  lletra = lletra.toUpperCase(); //guardem el valor del quadre de text en una variable i la pasem a majuscules
  if (lletra !== "") {
    //comparem si la lletra és diferent a un string buit
    letras_introducidas = letras_introducidas + " " + lletra; //guardem la lletra en un string i un espai
    document.getElementById(
      "letras_introducidas"
    ).innerText = letras_introducidas;
    //mostra per pantalla el string letras_introducidas
    console.log(lletra);
    var pos = palabraelegida.indexOf(lletra); //busquem la posició on esta situada la lletra que
    //ha introduit l'usuari en la paraula per endivinar.
    if (pos == -1) {
      contador++;
      switch (
        contador //serveix per controlar el src de la imatge
      ) {
        case 1:
          pagina_secundaria.document.getElementById("imagen").src = "img2.jpg";
          break;
        case 2:
          pagina_secundaria.document.getElementById("imagen").src = "img3.jpg";
          break;
        case 3:
          pagina_secundaria.document.getElementById("imagen").src = "img4.jpg";
          break;
        case 4:
          pagina_secundaria.document.getElementById("imagen").src = "img5.jpg";
          break;
        case 5:
          pagina_secundaria.document.getElementById("imagen").src = "img6.jpg";
          alert("HAS PERDUT, ESPERA 10 SEGONS");
          document.getElementById("introduir_lletra").style.display = "none"; //ocultem el display del botó introduir lletres per evitar errors
          document.getElementById("tornar").style.display = "none"; //ocultem el display del botó torna a començar per evitar errors
          partidasP++; //augmentem el contador de partides perdudes
          setCookie("PartidasP", partidasP, 10); //acutalitzem el valor de la cookie PartidasP
          setTimeout(function () {
            alert("GRACIES PER ESPERAR-TE 10 SEGONS");
          }, 10000); //setTimout que ens mostra un alert passat els 10000 milisegons
          pagina_cuaternaria.document.getElementById("partidesP").innerText =
            "Partides perdudes: " + partidasP; //mostra les partides perdudes
          setTimeout(function () {
            document.getElementById("introduir_lletra").style.display =
              "inline";
            document.getElementById("tornar").style.display = "inline";
          }, 10000); //setTimout que passat els 10 segons ens torna a mostrar el display dels dos botons
          novaparaula();
          break;
      }
    } else {
      while (pos !== -1) {
        //serveix per si hi ha més d'una lletra que ha indicat l'usuari en la paraula per endevinar
        //mentres la posició de la lletra sigui -1, és a dir, que esta en la paraula per endevinar.
        palabraD[pos] = lletra; //subsituirem en l'array el guio per la lletra corresponent
        pos = palabraelegida.indexOf(lletra, pos + 1); //indiquem que busqui la nova posició de la lletra a partir de la anterior + 1
        // és a dir si la lletra estaba en la pos 2, seguirem buscant a partir de la pos 3
      }
    }
  }
  console.log(palabraD);
  mostrarcadena();
}

function mostrarcadena() {
  //serveix per saber si l'usuari ja ha
  //encertat la paraula o per mostrar l'estat actual de la paraula per endivinar
  cadena = ""; //buidem la cadena per a sobrescriure-la
  cadena_igual_palabra = ""; //buidem la cadena per a sobrescriure-la,
  for (i = 0; i < palabraD.length; i++) {
    //funcio per mostrar l'array de la paraula que estem descobrint.
    cadena = cadena + " " + palabraD[i];
    cadena_igual_palabra = cadena_igual_palabra + palabraD[i];
  }
  if (cadena_igual_palabra == palabraelegida) {
    //comaprem l'estat actual dela paraula amb la paraula escollida
    pagina_terciaria.window.document.getElementById(
      "lletres"
    ).innerText = cadena; //mostrem la cadena per pantalla
    partidasG++; //augmentem el valor de partidasG
    setCookie("PartidasG", partidasG, 10); //actualitzem el valor de la cookie PartidasG
    alert("HAS GUANYAT");
    pagina_cuaternaria.document.getElementById("partidesG").innerText =
      "Partides guanyades: " + partidasG; //mostra per pantalla les partides guanyades
    novaparaula();
  } else {
    console.log(cadena_igual_palabra);
    console.log(cadena);
    pagina_terciaria.window.document.getElementById(
      "lletres"
    ).innerText = cadena; //mostra l'String cadena per pantalla
  }
}
