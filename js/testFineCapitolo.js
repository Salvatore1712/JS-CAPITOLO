/*
In questo esercizio potrai combinare cicli e logica condizionale per creare un piccolo gioco interattivo completo.

Scrivi uno script che realizzi un gioco "indovina il numero":

Genera un numero casuale da 1 a 100 e memorizzalo in una const. Non devi capire la formula a memoria, 
per ora usala e basta: const numeroSegreto = Math.floor(Math.random() * 100) + 1;
Inizia un ciclo while che continui finché il gioco non è finito. Puoi usare una variabile booleana, per esempio let giocoFinito = false; 
e ciclare while (giocoFinito === false).
All'interno del ciclo, chiedi all'utente di inserire un numero con prompt(). Ricorda di convertirlo in un numero!
Usa una struttura if / else if / else per controllare il numero inserito:
Se è uguale a numeroSegreto, informa la persona che ha vinto con un alert(), imposta giocoFinito = true; per fermare il ciclo.
Se è più basso di numeroSegreto, avvisa con un alert() che il numero da indovinare è più alto.
Se è più alto di numeroSegreto, avvisa con un alert() che il numero da indovinare è più basso.
Tieni traccia del numero di tentativi in una variabile contatore e mostrala nel messaggio di vittoria finale.
*/

const numeroCasuale = Math.floor(Math.random() * 10);

let giocoFinito = false;
let numeroUser;
let tentativi = 0;

while(giocoFinito === false) {
    numeroUser = Number(prompt("Inserisci numero:"))
    if (numeroUser === numeroCasuale) {
        giocoFinito = true;
        alert(`HAI VINTO\nTentativi: ${tentativi}`);
    } else if (numeroUser < numeroCasuale) {
        alert("..è minore")
        tentativi ++;
    } else if (numeroUser > numeroCasuale) {
        alert("..è maggiore")
        tentativi ++;
    }
}
console.log("Temtativi: " + tentativi);
