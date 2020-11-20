/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/



function parolaPalindromaVerifica(parolaUtenteIns){

  var arrayUtente = [];
  var parolaRovesciata = [];

  for (var i = 0; i < parolaUtenteIns.length; i++) {
    parolaRovesciata.push(parolaUtenteIns[i]);
  }

  for (i = 0; i < parolaUtenteIns.length; i++) {
    arrayUtente.push(parolaUtenteIns[i]);
  }

  parolaRovesciata.reverse();

  var x = 0;
  for (i = 0; i < parolaUtenteIns.length; i++) {

    if (arrayUtente[i] === parolaRovesciata[i]) {
      x++;
    }

  }

  if (x === parolaUtenteIns.length) {
    return true;
  }

}

var parolaUtente = prompt("inserire parola");

if ( parolaPalindromaVerifica(parolaUtente) ) {
  console.log("Palidroma");
} else {
  console.log("Non palidroma");
}
