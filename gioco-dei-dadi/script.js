"use strict";
console.clear();

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */



// Creo la funzione che genera un numero casuale compreso tra "min" e "max" che nel caso dei dadi è
// un numero compreso fra 1 e 6
function randomDice(min, max) {
    return Math.floor((Math.random() * (max - min)) + 1) + min;
}
const randomPCnumber = randomDice(1, 6);
const randomUserNumber = randomDice(1, 6);
// Output di prova
console.log("Dado del pc: " + randomPCnumber + " dado dell'utente: " + randomUserNumber);

// Switch di controllo
switch (true) {
    case (randomPCnumber > randomUserNumber):
        console.log(`Hai perso! Hai lanciato ${randomUserNumber} mentre il computer ha lanciato un numero più alto: ${randomPCnumber}`);
        break;
    case (randomUserNumber > randomPCnumber):
        console.log(`Complimenti hai vinto! Hai lanciato ${randomUserNumber} mentre il computer ha lanciato un numero più basso: ${randomPCnumber}`);
        break;
    default:
        console.log(`Pareggio! Tu e il pc avete lanciato lo stesso numero: ${randomUserNumber}`);
}