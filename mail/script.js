"use strict";
console.clear();

/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email */

// Creo una lista di email
const mailList = [
    "pippo@gmail.com",
    "pluto@gmail.com",
    "paperino@gmail.com",
    "topolino@tiscali.it",
    "danilo.mosca@gmail.com",
]

// Chiedo all'utente di inserire una mail
const userMail = prompt("Inserisci la tua email");
// Creo una variabile booleana di appoggio e la inizializzo a false
let flag = false;

// Ciclo che controlla tutte le mail presenti nell'array
for (let i = 0; i < mailList.length; i++) {
    if (userMail === mailList[i]) {
        flag = true;
    }
}

if (flag) {
    console.log("Benvenuto! La tua email è nella lista, puoi accedere");

}
else {
    console.log("Spiacente! La tua mail non risulta nella lista");

}

