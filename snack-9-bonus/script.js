"use strict";
console.clear()

/* Calcola la somma e la media dei primi 10 numeri. */

// Creo la variabile somma e la inizializzo a zero
let sum = 0;
// Creo il ciclo che andrà a sommare i primi 10 numeri e la loro media
for (let i = 0; i <= 10; i++) {
    sum += i;
}
// Stampo a schermo la somma
console.log("La somma dei primi 10 numeri è: " + sum);

// Creo la variabile che conterra la media
const average = sum / 10;
console.log("La media dei primi 10 numeri interi è: " + average);