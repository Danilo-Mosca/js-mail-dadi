"use strict";
console.clear();

/* Stampa le potenze di 2 fino a 1000. */

// Messaggio di anteprima
console.log("Potenze di 2 fino a 1000:");
// Ciclo che stampa le potenze di due per i primi 1000 numeri
for (let i = 0; i <= 1000; i++) {
    console.log(parseInt(Math.pow(i, 2)));
    // Oppure usando l'operatore di elevazione a potenza (**)
    // console.log(i**2);
}