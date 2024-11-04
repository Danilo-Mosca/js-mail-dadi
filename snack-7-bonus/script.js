"use strict";
console.clear();

/* Stampa a schermo le potenze fino al numero massimo 1000 */

// Contatore delle potenze e variabile accumulatore di elevazione a potenza
let i = 0, pow = 0;
// Flag di controllo ciclo
let flag = true;
while (flag) {
    pow = 2 ** i;
    if (pow < 1000) {
        console.log(`2 alla ${i} = ${pow}`);
    }
    else {
        flag = false;
    }
    i++;
}

/* Oppure stampa a schermo le potenze di 2 fino a 1000. */

// Messaggio di anteprima
console.log("Potenze di 2 fino a 1000:");
// Ciclo che stampa le potenze di due per i primi 1000 numeri
for (let i = 0; i <= 1000; i++) {
    console.log(parseInt(Math.pow(i, 2)));
    // Oppure usando l'operatore di elevazione a potenza (**)
    // console.log(i**2);
}