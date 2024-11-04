"use strict";
console.clear();

/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

// Chiedo all'utente per quanti numeri vuole il cubo (partendo da 1)
const indexCubeNumber = prompt("Per quanti numeri (partendo da 1) vuoi il cubo?");

// Creo un array (che inizializzo solo col numero zero) che conterrà tutti gli N numeri al cubo richiesti dall'utente
const arrayCubeNumber = [0];
// Ciclo in cui inserisco in un array i primi N numeri al cubo richiesti dall'utente 
for (let i = 0; i < indexCubeNumber; i++) {
    // Uso l'operatore di elevazione a potenza (**)
    arrayCubeNumber[i] = (i + 1) ** 3;
}
// Messaggio di output di quanti numeri al cubo ha richiesto l'utente
console.log("Hai richiesto il cubo dei primi " + indexCubeNumber + " numeri");
// Stampo a schermo i primi N numeri al cubo richiesti dall'utente
for (let i = 0; i < arrayCubeNumber.length; i++) {
    console.log(arrayCubeNumber[i]);
}