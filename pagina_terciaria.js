var lletresPerDescobrir =[]; //array amb totes les lletres que pot descobrir l'usuari
var cadena = "";

for(i = 0; i<27; i++){ //omplim l'array inicialment amb guions baixos (_)
    lletresPerDescobrir[i] = "_"
    cadena =  cadena + " " + lletresPerDescobrir[i] //formem una cadena amb els _ i espais per
                                                    //diferenciar bé les lletres
}
document.getElementById("lletres").innerText = cadena; //mostrem la cadena en l'element p amb id lletres
