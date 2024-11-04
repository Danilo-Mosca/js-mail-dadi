"use strict";
console.clear();

/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

// Creo l'array vuoto
const arrayOdd = [];

// Creo una variabile contatore per il while
let i = 0;
// Creo il ciclo per il controllo e l'inserimento dei numeri dispari sull'array
while (i < 6) {
    const number = prompt("Inserisci il " + (i + 1) + " numero");
    if (parseInt(number) == number) {
        // Se ho inserito un numero incremento il contatore e procedo al controllo del numero se pari o dispari,
        i++;
        /* Se il numero diviso due da resto allora il numero è dispari e lo inserisco nell'array, 
           altrimenti il numero è pari e non lo inserisco nell'array */
        if (number % 2 != 0) {
            arrayOdd.push(number);
        }
    }
    // Se non ho inserito un numero richiedo all'utente di reinserirlo e non incremento il contatore
    else {
        alert("Non hai inserito un numero! Reinserisci il " + (i + 1) + " numero");
    }
}
// Infine controllo se ho inserito almeno un numero dispari, in caso contrario, stampo a schermo un messaggio personalizzato
if (arrayOdd == "") {
    console.log("Non hai inserito nessun numero dispari!");
}
else {
    console.log(`Hai inserito i seguenti numeri dispari: ${arrayOdd}`);
}