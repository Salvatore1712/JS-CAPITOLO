/* Esercizio 2 — Maggiorenne
Dato:
let eta = 20;
stampa:
"Maggiorenne"
"Minorenne"
Usando operatore ternario
*/

let eta = 15;
let show = document.querySelector(".risultato");

let risultato = (eta < 18) ? "Minorenne" : "Maggiorenne";

//stampa il risultato in p
show.textContent = risultato;