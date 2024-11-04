"use strict";
console.clear();

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Creo la funzione che genera un numero casuale compreso tra "min" e "max" che nel caso dei dadi è
// un numero compreso fra 1 e 6
function randomDice (max. min) {
    return Math.floor((Math.random() * (max - min)) + 1) + min;
}
