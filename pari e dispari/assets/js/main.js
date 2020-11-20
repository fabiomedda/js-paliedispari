/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
(usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
Dichiariamo chi ha vinto.
*/


function giocoPariDispari (pariDispariIns, numeroUtenteIns){

  var numeroPc = Math.ceil(Math.random() * 5);
  var somma = numeroUtenteIns + numeroPc;
  //console.log(pariDispariIns);
  //console.log(somma);
  if (pariDispariIns === "pari") {

    if (somma % 2 === 0) {
      return true;
    } else {
      return false;
    }

  } else if (pariDispariIns === "dispari"){

    if (somma % 2 === 0) {
      return false;
    } else {
      return true;
    }

  }

}

var pariDispari = prompt("pari o dispari");
var numeroUtente = Number(prompt("inserisci numero da 1 a 5"));

var giocoPariDispariVal = giocoPariDispari(pariDispari, numeroUtente);

if (giocoPariDispariVal) {
  console.log("Hai vinto");
} else if( giocoPariDispariVal === false ) {
  console.log("Hai perso");
} else {
  console.log("inserire dati giusti");
}
